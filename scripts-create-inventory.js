const fs=require('fs');
const rows=[
['Vai trò người dùng','Tên giao diện','Chức năng chính','Tên tệp tin giao diện','Vai trò / mục đích giao diện'],
['Dùng chung','Đăng nhập','Đăng nhập và xác thực tài khoản','pages/login.html','Cổng vào hệ thống; chuyển người dùng đến dashboard sau khi đăng nhập'],
['Dùng chung','Đăng ký','Tạo tài khoản người dùng mới','pages/register.html','Tiếp nhận thông tin tài khoản và vai trò ban đầu'],
['Dùng chung','Khôi phục mật khẩu','Gửi yêu cầu khôi phục mật khẩu','pages/forgot-password.html','Hỗ trợ người dùng lấy lại quyền truy cập'],
['Dùng chung','Dashboard','Tóm tắt ticket, SLA và lối tắt nghiệp vụ','pages/index.html','Màn hình tổng quan sau đăng nhập'],
['Dùng chung','Thông báo','Xem thông báo ticket và SLA','pages/notifications.html','Trung tâm nhắc việc và cập nhật trạng thái'],
['Dùng chung','Hồ sơ cá nhân','Xem và chỉnh sửa thông tin cá nhân','pages/profile.html','Quản lý thông tin tài khoản hiện tại'],
['Dùng chung','Không có quyền','Thông báo truy cập bị từ chối','pages/403.html','Phản hồi lỗi phân quyền và quay về dashboard'],
['Dùng chung','Không tìm thấy trang','Thông báo đường dẫn không tồn tại','pages/404.html','Phản hồi lỗi đường dẫn và điều hướng về trang chủ'],
['Người yêu cầu','Tạo yêu cầu bảo trì','Chọn thiết bị, tự điền phòng, mô tả lỗi, mức độ, ảnh, AI phân loại và gửi ticket','pages/requester-ticket-create.html','Tạo ticket mới; có validation và lưu dữ liệu'],
['Người yêu cầu','Yêu cầu của tôi','Xem, tìm kiếm và lọc các ticket đã tạo','pages/requester-my-tickets.html','Theo dõi danh sách ticket cá nhân theo trạng thái/SLA'],
['Người yêu cầu','Chi tiết ticket','Xem timeline, trạng thái, SLA và gửi phản hồi','pages/requester-ticket-detail.html','Theo dõi một ticket từ lúc tạo đến hoàn tất'],
['Kỹ thuật viên','Hàng đợi công việc','Xem ticket, tìm kiếm/lọc, ưu tiên và nhận việc','pages/technician-work-queue.html','Danh sách công việc cần kỹ thuật viên xử lý'],
['Kỹ thuật viên','Chi tiết sửa chữa','Cập nhật trạng thái, checklist, nguyên nhân, vật tư và ghi chú','pages/technician-repair-detail.html','Không gian xử lý một ticket tại hiện trường'],
['Kỹ thuật viên','Lịch sử sửa chữa','Tra cứu các lần sửa chữa theo thiết bị/nguyên nhân','pages/technician-repair-history.html','Lưu lại và đối chiếu lịch sử bảo trì'],
['Quản lý bảo trì','Bảng điều phối','Xem ticket chưa gán và phân công kỹ thuật viên','pages/manager-dispatch-board.html','Màn hình điều phối nhân lực và ticket'],
['Quản lý bảo trì','Giám sát SLA','Xem KPI, cảnh báo sắp hạn/quá hạn và lọc ticket','pages/manager-sla-monitor.html','Theo dõi hiệu suất và rủi ro vi phạm SLA'],
['Quản lý bảo trì','Phân tích lỗi lặp lại','AI tóm tắt lỗi lặp, độ chắc chắn và đề xuất bảo trì','pages/manager-failure-insights.html','Hỗ trợ quyết định bảo trì dự phòng'],
['Quản trị viên','Quản lý thiết bị','Thêm, xem, sửa, tìm kiếm và lưu trữ thiết bị','pages/admin-asset-management.html','Quản lý danh mục tài sản và vị trí thiết bị'],
['Quản trị viên','Quản lý nhóm lỗi','Thêm, sửa và xem các nhóm lỗi/taxonomy','pages/admin-issue-category-management.html','Chuẩn hóa loại lỗi để phân loại ticket'],
['Quản trị viên','Quản lý người dùng','Thêm, xem, sửa, vô hiệu hóa người dùng và vai trò','pages/admin-user-management.html','Quản lý tài khoản và quyền truy cập hệ thống']
];
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
let xml='<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"><Styles><Style ss:ID="Header"><Font ss:Bold="1" ss:Color="#FFFFFF"/><Interior ss:Color="#17365D" ss:Pattern="Solid"/><Alignment ss:WrapText="1"/></Style><Style ss:ID="Cell"><Alignment ss:Vertical="Top" ss:WrapText="1"/></Style></Styles><Worksheet ss:Name="Danh sach giao dien"><Table ss:ExpandedColumnCount="5" ss:ExpandedRowCount="21"><Column ss:Width="125"/><Column ss:Width="180"/><Column ss:Width="360"/><Column ss:Width="270"/><Column ss:Width="400"/>';
rows.forEach((row,i)=>{xml+='<Row>';row.forEach(cell=>{xml+=`<Cell ss:StyleID="${i===0?'Header':'Cell'}"><Data ss:Type="String">${esc(cell)}</Data></Cell>`});xml+='</Row>'});xml+='</Table><AutoFilter x:Range="R1C1:R21C5" xmlns="urn:schemas-microsoft-com:office:excel"/></Worksheet></Workbook>';
const out='docs/fixflow-screen-inventory.xls';fs.writeFileSync(out,xml,'utf8');console.log(out,fs.statSync(out).size,'bytes',rows.length-1,'interfaces');
