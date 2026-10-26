// Module nghiệp vụ người yêu cầu: các hàm được tách riêng để dễ giải thích khi vấn đáp.
function createRequesterTicket(formData) {
  const tickets = FixFlow.getTickets();
  const ticket = { ...formData, id: `TK-${1043 + tickets.length}`, status: 'Chờ phân công', assignee: 'Chưa gán', sla: 0, created: new Date().toLocaleDateString('vi-VN') };
  tickets.unshift(ticket); FixFlow.saveTickets(tickets); return ticket;
}
function cancelRequesterTicket(id) {
  const tickets = FixFlow.getTickets().map(t => t.id === id ? { ...t, status: 'Đã hủy' } : t);
  FixFlow.saveTickets(tickets); return tickets;
}
        const filter = () => {
            const kw = document.getElementById('keyword').value.toLowerCase();
            const st = document.getElementById('status').value;
            document.querySelectorAll('#ticketTable tbody tr').forEach(row => {
                const text = row.textContent.toLowerCase();
                const status = row.cells[4].textContent.trim();
                row.style.display = (text.includes(kw) && (!st || status === st)) ? '' : 'none';
            });
        };
        document.getElementById('keyword').oninput = filter;
        document.getElementById('status').onchange = filter;
        document.getElementById('reset').onclick = () => {
            document.getElementById('keyword').value = '';
            document.getElementById('status').value = '';
            filter();
        };
                document.getElementById('aiBtn').onclick = () => {
            const desc = document.getElementById('issueDesc').value.trim();
            if(!desc) return alert('Vui lòng nhập mô tả sự cố.');
            document.getElementById('aiBox').classList.remove('d-none');
            document.getElementById('aiText').innerHTML = `Đề xuất: <b>Điện - Thiết bị trình chiếu</b> (Độ chính xác 89%)`;
        };
        document.getElementById('ticketForm').onsubmit = (e) => {
            e.preventDefault();
            if(!e.target.checkValidity()) return e.target.classList.add('was-validated');
            alert('Tạo ticket thành công!');
            location.href = 'requester-my-tickets.html';
        };
                document.getElementById('sendReply').onclick = () => {
            const txt = document.getElementById('replyText');
            if(!txt.value.trim()) return alert('Vui lòng nhập phản hồi.');
            alert('Đã gửi phản hồi!');
            txt.value = '';
        };