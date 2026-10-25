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
