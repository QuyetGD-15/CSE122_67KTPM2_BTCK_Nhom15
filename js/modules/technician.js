// Module nghiệp vụ kỹ thuật viên.
function assignTechnician(id, name) {
  const tickets = FixFlow.getTickets().map(t => t.id === id ? { ...t, assignee: name, status: 'Đã nhận' } : t);
  FixFlow.saveTickets(tickets); return tickets;
}
function updateRepairStatus(id, status, note = '') {
  const tickets = FixFlow.getTickets().map(t => t.id === id ? { ...t, status, repairNote: note } : t);
  FixFlow.saveTickets(tickets); return tickets;
}
