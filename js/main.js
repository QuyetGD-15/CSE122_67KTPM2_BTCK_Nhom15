// Điểm khởi tạo chung của ứng dụng. Các trang có thể dùng module này.
const AppState = { loading: false, error: null, currentRole: 'requester' };
function showLoading(element) { if (element) element.innerHTML = '<div class="text-center py-4" role="status">Đang tải dữ liệu...</div>'; }
function showError(element, retry) { if (element) element.innerHTML = `<div class="alert alert-danger">Không thể tải dữ liệu. <button class="btn btn-sm btn-outline-danger" type="button" data-retry>Thử lại</button></div>`; element?.querySelector('[data-retry]')?.addEventListener('click', retry); }
function showEmpty(element, message = 'Chưa có dữ liệu', cta = '') { if (element) element.innerHTML = `<div class="empty-state"><p>${message}</p>${cta}</div>`; }
