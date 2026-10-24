const STORAGE_KEY = "fixflow-requester-tickets";
const initialTickets = [
  {
    id: "FF-2026-084",
    asset: "Máy chiếu Epson EB-X06",
    location: "Phòng học A203",
    category: "Điện / nguồn",
    description: "Máy chiếu không khởi động, đèn nguồn nhấp nháy liên tục từ đầu giờ sáng.",
    priority: "Cao",
    status: "Đang xử lý",
    date: "2026-10-23",
    technician: "Trần Minh Khoa",
  },
  {
    id: "FF-2026-079",
    asset: "Máy lạnh Daikin",
    location: "Phòng họp B102",
    category: "Cơ khí",
    description: "Máy lạnh phát ra tiếng ồn lớn khi hoạt động.",
    priority: "Bình thường",
    status: "Chờ tiếp nhận",
    date: "2026-10-21",
    technician: "",
  },
  {
    id: "FF-2026-061",
    asset: "Máy in HP LaserJet",
    location: "Văn phòng tầng 1",
    category: "Khác",
    description: "Đã thay hộp mực và căn chỉnh lại máy in.",
    priority: "Bình thường",
    status: "Đã hoàn thành",
    date: "2026-10-18",
    technician: "Lê Quốc Bảo",
  },
];
const viewTitles = {
  overview: "Tổng quan",
  tickets: "Yêu cầu của tôi",
  create: "Tạo yêu cầu",
};
let tickets = loadTickets();
let activeTicketId = null;
let toastTimer;
function loadTickets() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === null) return initialTickets;
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) throw new Error("Dữ liệu yêu cầu đã lưu không hợp lệ.");
    return parsed;
  } catch (error) {
    console.error("Không thể đọc dữ liệu FixFlow đã lưu:", error);
    return initialTickets;
  }
}
function saveTickets() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
  } catch (error) {
    console.error("Không thể lưu dữ liệu FixFlow:", error);
    showToast("Không thể lưu dữ liệu trên trình duyệt. Vui lòng kiểm tra dung lượng lưu trữ.");
  }
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}
function formatDate(value) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" }).format(date);
}
function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function statusClass(status) {
  if (status === "Đang xử lý") return "status-progress";
  if (status === "Đã hoàn thành") return "status-complete";
  if (status === "Đã hủy") return "status-cancelled";
  return "status-pending";
}
function priorityClass(priority) {
  if (priority === "Khẩn cấp") return "priority-urgent";
  if (priority === "Cao") return "priority-high";
  return "priority-normal";
}
function statusMarkup(status) {
  return `<span class="status-pill ${statusClass(status)}">${escapeHTML(status)}</span>`;
}
function ticketRow(ticket, showPriority = false) {
  return `<tr>
    <td><span class="ticket-id">${escapeHTML(ticket.id)}</span></td>
    <td><strong>${escapeHTML(ticket.asset)}</strong></td>
    <td>${escapeHTML(ticket.category)}</td>
    ${showPriority ? `<td><span class="priority-pill ${priorityClass(ticket.priority)}">${escapeHTML(ticket.priority)}</span></td>` : ""}
    <td>${formatDate(ticket.date)}</td>
    <td>${statusMarkup(ticket.status)}</td>
    <td><button class="row-action" type="button" data-ticket-id="${escapeHTML(ticket.id)}" aria-label="Xem yêu cầu ${escapeHTML(ticket.id)}">···</button></td>
  </tr>`;
}
function render() {
  document.querySelector("#current-date").textContent = new Intl.DateTimeFormat("vi-VN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date()).toLocaleUpperCase("vi");
  const active = tickets.filter((ticket) => ticket.status !== "Đã hủy");
  document.querySelector("#stat-total").textContent = String(tickets.length);
  document.querySelector("#stat-progress").textContent = String(active.filter((ticket) => ticket.status === "Đang xử lý").length);
  document.querySelector("#stat-pending").textContent = String(active.filter((ticket) => ticket.status === "Chờ tiếp nhận").length);
  document.querySelector("#stat-completed").textContent = String(active.filter((ticket) => ticket.status === "Đã hoàn thành").length);
  document.querySelector("#nav-count").textContent = String(active.length);
  const recent = [...tickets].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);
  document.querySelector("#recent-tickets").innerHTML = recent.map((ticket) => ticketRow(ticket)).join("");
  document.querySelector("#recent-empty").classList.toggle("hidden", recent.length > 0);
  document.querySelector(".recent-panel .table-wrap").classList.toggle("hidden", recent.length === 0);
  renderTicketList();
}
function renderTicketList() {
  const search = document.querySelector("#ticket-search").value.trim().toLocaleLowerCase("vi");
  const status = document.querySelector("#status-filter").value;
  const matches = [...tickets]
    .filter((ticket) => status === "all" || ticket.status === status)
    .filter((ticket) => [ticket.id, ticket.asset, ticket.category, ticket.description].some((value) => value.toLocaleLowerCase("vi").includes(search)))
    .sort((a, b) => b.date.localeCompare(a.date));
  document.querySelector("#ticket-list").innerHTML = matches.map((ticket) => ticketRow(ticket, true)).join("");
  const empty = matches.length === 0;
  document.querySelector("#ticket-empty").classList.toggle("hidden", !empty);
  document.querySelector(".view#view-tickets .table-wrap").classList.toggle("hidden", empty);
  const hasFilters = search.length > 0 || status !== "all";
  document.querySelector("#ticket-empty-title").textContent = hasFilters ? "Không tìm thấy yêu cầu" : "Chưa có yêu cầu nào";
  document.querySelector("#ticket-empty-copy").textContent = hasFilters
    ? "Thử thay đổi từ khóa hoặc bộ lọc của bạn."
    : "Các yêu cầu bạn gửi sẽ xuất hiện tại đây.";
  document.querySelector("#clear-filters").classList.toggle("hidden", !hasFilters);
}
function navigate(viewName) {
  if (!viewTitles[viewName]) return;
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === `view-${viewName}`));
  document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("active", link.dataset.view === viewName));
  document.querySelector("#page-name").textContent = viewTitles[viewName];
  document.querySelector("#sidebar").classList.remove("open");
  document.querySelector("#mobile-menu").setAttribute("aria-expanded", "false");
  if (viewName === "tickets") renderTicketList();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3200);
}
function openTicket(ticketId) {
  const ticket = tickets.find((item) => item.id === ticketId);
  if (!ticket) return;
  activeTicketId = ticket.id;
  document.querySelector("#detail-title").textContent = ticket.id;
  document.querySelector("#detail-content").innerHTML = `
    <div class="detail-body">
      <div class="detail-item"><span>Thiết bị</span><strong>${escapeHTML(ticket.asset)}</strong></div>
      <div class="detail-item"><span>Vị trí</span><strong>${escapeHTML(ticket.location)}</strong></div>
      <div class="detail-item"><span>Loại vấn đề</span><strong>${escapeHTML(ticket.category)}</strong></div>
      <div class="detail-item"><span>Mức độ ưu tiên</span><strong class="${priorityClass(ticket.priority)}">${escapeHTML(ticket.priority)}</strong></div>
      <div class="detail-item"><span>Ngày gửi</span><strong>${formatDate(ticket.date)}</strong></div>
      <div class="detail-item"><span>Trạng thái</span>${statusMarkup(ticket.status)}</div>
      <div class="detail-item full"><span>Mô tả</span><p>${escapeHTML(ticket.description)}</p></div>
      ${ticket.technician ? `<div class="detail-item full"><span>Kỹ thuật viên phụ trách</span><strong>${escapeHTML(ticket.technician)}</strong></div>` : ""}
    </div>
    <div class="detail-timeline"><strong>Tiến trình:</strong> ${ticket.status === "Chờ tiếp nhận" ? "Yêu cầu đã được gửi và đang chờ đội ngũ tiếp nhận." : ticket.status === "Đang xử lý" ? "Kỹ thuật viên đã tiếp nhận yêu cầu và đang xử lý." : ticket.status === "Đã hoàn thành" ? "Yêu cầu đã được xử lý hoàn tất." : "Yêu cầu đã được hủy."}</div>`;
  document.querySelector("#cancel-ticket").classList.toggle("hidden", ticket.status !== "Chờ tiếp nhận");
  document.querySelector("#detail-dialog").showModal();
}
function setError(id, message) {
  document.querySelector(`#${id}`).textContent = message;
}
function validateForm() {
  const asset = document.querySelector("#asset-name").value.trim();
  const location = document.querySelector("#asset-location").value.trim();
  const category = document.querySelector("#issue-category").value;
  const description = document.querySelector("#description").value.trim();
  setError("asset-error", asset ? "" : "Vui lòng nhập tên thiết bị.");
  setError("location-error", location ? "" : "Vui lòng nhập vị trí thiết bị.");
  setError("category-error", category ? "" : "Vui lòng chọn loại vấn đề.");
  setError("description-error", description.length < 10 ? "Mô tả cần có ít nhất 10 ký tự." : "");
  if (!asset || !location || !category || description.length < 10) {
    document.querySelector(".field-error:not(:empty)")?.closest(".field")?.querySelector("input, select, textarea")?.focus();
    return null;
  }
  return { asset, location, category, description };
}
function makeTicketId() {
  const sequence = String(Date.now()).slice(-5);
  return `FF-${new Date().getFullYear()}-${sequence}`;
}
function suggestCategory(text) {
  const normalized = text.toLocaleLowerCase("vi");
  if (/mạng|wifi|wi-fi|internet|kết nối|router/.test(normalized)) return { category: "Mạng / kết nối", team: "Đội hạ tầng mạng", reason: "Mô tả có dấu hiệu liên quan đến kết nối hoặc thiết bị mạng." };
  if (/phần mềm|ứng dụng|lỗi màn hình|không mở|đăng nhập|cài đặt/.test(normalized)) return { category: "Phần mềm", team: "Đội hỗ trợ phần mềm", reason: "Từ khóa trong mô tả gợi ý vấn đề thuộc phần mềm hoặc ứng dụng." };
  if (/điện|nguồn|không bật|không khởi động|chập|ổ cắm|đèn/.test(normalized)) return { category: "Điện / nguồn", team: "Đội kỹ thuật điện", reason: "Mô tả có dấu hiệu về nguồn điện hoặc thiết bị không khởi động." };
  if (/ồn|rung|kẹt|nứt|gãy|cơ khí|quạt/.test(normalized)) return { category: "Cơ khí", team: "Đội kỹ thuật cơ khí", reason: "Mô tả có dấu hiệu về tiếng ồn hoặc bộ phận chuyển động." };
  if (/vệ sinh|bụi|bảo dưỡng|lọc/.test(normalized)) return { category: "Vệ sinh / bảo dưỡng", team: "Đội bảo dưỡng thiết bị", reason: "Mô tả đề cập đến vệ sinh hoặc bảo dưỡng định kỳ." };
  return null;
}
document.addEventListener("click", (event) => {
  const navigation = event.target.closest("[data-view]");
  if (navigation) {
    event.preventDefault();
    navigate(navigation.dataset.view);
  }
  const ticketButton = event.target.closest("[data-ticket-id]");
  if (ticketButton) openTicket(ticketButton.dataset.ticketId);
  if (event.target.closest(".dialog-close")) document.querySelector("#detail-dialog").close();
});
document.querySelector("#mobile-menu").addEventListener("click", (event) => {
  const sidebar = document.querySelector("#sidebar");
  const isOpen = sidebar.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
});
document.querySelector("#ticket-search").addEventListener("input", renderTicketList);
document.querySelector("#status-filter").addEventListener("change", renderTicketList);
document.querySelector("#clear-filters").addEventListener("click", () => {
  document.querySelector("#ticket-search").value = "";
  document.querySelector("#status-filter").value = "all";
  renderTicketList();
});
document.querySelector("#description").addEventListener("input", (event) => {
  document.querySelector("#description-count").textContent = `${event.currentTarget.value.length}/600`;
  setError("description-error", "");
});
document.querySelector("#request-form").addEventListener("reset", () => {
  window.setTimeout(() => {
    document.querySelectorAll(".field-error").forEach((error) => { error.textContent = ""; });
    document.querySelector("#description-count").textContent = "0/600";
    document.querySelector("#ai-result").classList.add("hidden");
  }, 0);
});
document.querySelector("#request-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const values = validateForm();
  if (!values) return;
  const ticket = {
    ...values,
    id: makeTicketId(),
    location: document.querySelector("#asset-location").value.trim(),
    priority: document.querySelector("#priority").value,
    status: "Chờ tiếp nhận",
    date: localDateKey(),
    technician: "",
  };
  tickets.unshift(ticket);
  saveTickets();
  render();
  event.currentTarget.reset();
  navigate("tickets");
  showToast(`Đã gửi yêu cầu ${ticket.id}. Bạn có thể theo dõi tiến độ tại đây.`);
});
document.querySelector("#ai-suggest").addEventListener("click", (event) => {
  const description = document.querySelector("#description").value.trim();
  const resultPanel = document.querySelector("#ai-result");
  const button = event.currentTarget;
  if (description.length < 10) {
    showToast("Nhập mô tả vấn đề (ít nhất 10 ký tự) để nhận gợi ý.");
    document.querySelector("#description").focus();
    return;
  }
  button.disabled = true;
  button.innerHTML = "<span aria-hidden=\"true\">◌</span> Đang phân tích...";
  resultPanel.classList.add("hidden");
  window.setTimeout(() => {
    const suggestion = suggestCategory(description);
    button.disabled = false;
    button.innerHTML = "<span aria-hidden=\"true\">✦</span> Phân tích lại";
    resultPanel.classList.remove("hidden");
    if (!suggestion) {
      resultPanel.innerHTML = "<strong>Chưa đủ thông tin để gợi ý</strong><p>Trợ lý chưa chắc chắn về loại vấn đề. Bạn có thể bổ sung dấu hiệu cụ thể hoặc chọn loại vấn đề thủ công.</p>";
      return;
    }
    resultPanel.innerHTML = `<strong>${escapeHTML(suggestion.category)} · ${escapeHTML(suggestion.team)}</strong><p>${escapeHTML(suggestion.reason)} Đây là gợi ý tham khảo; bạn có thể chỉnh sửa lựa chọn.</p>`;
    document.querySelector("#issue-category").value = suggestion.category;
  }, 650);
});
document.querySelector("#cancel-ticket").addEventListener("click", () => {
  const ticket = tickets.find((item) => item.id === activeTicketId);
  if (!ticket || ticket.status !== "Chờ tiếp nhận") return;
  ticket.status = "Đã hủy";
  saveTickets();
  render();
  document.querySelector("#detail-dialog").close();
  showToast(`Đã hủy yêu cầu ${ticket.id}.`);
});
document.querySelector("#detail-dialog").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});
render();