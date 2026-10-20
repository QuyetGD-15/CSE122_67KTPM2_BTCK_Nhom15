/* FixFlow: JavaScript thuần, cố ý viết rõ từng bước để sinh viên dễ đọc */
const FixFlow = {
  seedTickets: [
    { id:'TK-1042', asset:'Máy chiếu P302', location:'Phòng P302', priority:'Cao', status:'Đang sửa', assignee:'Nguyễn Văn An', created:'18/10/2026', sla:86, description:'Máy chiếu không nhận tín hiệu HDMI.' },
    { id:'TK-1038', asset:'Điều hòa A201', location:'Phòng A201', priority:'Trung bình', status:'Chờ phân công', assignee:'Chưa gán', created:'18/10/2026', sla:72, description:'Điều hòa không lạnh.' },
    { id:'TK-1029', asset:'PC Lab 1', location:'Phòng máy 1', priority:'Thấp', status:'Hoàn tất', assignee:'Trần Minh Khoa', created:'16/10/2026', sla:100, description:'Máy tính khởi động chậm.' },
    { id:'TK-1021', asset:'Máy in tầng 2', location:'Hành chính', priority:'Cao', status:'Quá hạn', assignee:'Lê Hoàng', created:'15/10/2026', sla:112, description:'Máy in kẹt giấy liên tục.' }
  ],
  assets: [
    { id:'AS-001', name:'Máy chiếu P302', category:'Thiết bị trình chiếu', location:'Phòng P302', status:'Đang dùng' },
    { id:'AS-002', name:'Điều hòa A201', category:'Thiết bị điện lạnh', location:'Phòng A201', status:'Bảo trì' },
    { id:'AS-003', name:'PC Lab 1', category:'Thiết bị máy tính', location:'Phòng máy 1', status:'Đang dùng' },
    { id:'AS-004', name:'Máy in tầng 2', category:'Thiết bị văn phòng', location:'Hành chính', status:'Đang dùng' }
  ],
  getTickets() { return JSON.parse(localStorage.getItem('fixflow_tickets') || 'null') || this.seedTickets; },
  saveTickets(tickets) { localStorage.setItem('fixflow_tickets', JSON.stringify(tickets)); },
  getAssets() { return JSON.parse(localStorage.getItem('fixflow_assets') || 'null') || this.assets; },
  saveAssets(assets) { localStorage.setItem('fixflow_assets', JSON.stringify(assets)); },
  statusClass(s) { return s==='Hoàn tất'?'bg-success':s==='Quá hạn'?'bg-danger':s==='Đang sửa'?'bg-primary':s==='Chờ phân công'?'bg-warning text-dark':'bg-secondary'; },
  priorityClass(p) { return p==='Cao'?'bg-danger':p==='Trung bình'?'bg-warning text-dark':'bg-secondary'; },
  renderTickets(list) {
    const body=document.querySelector('#ticketRows'); if(!body) return;
    if(!list.length){body.innerHTML='<tr><td colspan="7" class="empty-state">Không tìm thấy yêu cầu phù hợp.</td></tr>';return;}
    body.innerHTML=list.map(t=>`<tr><td><a href="requester-ticket-detail.html?id=${t.id}">${t.id}</a></td><td><b>${t.asset}</b><br><small class="text-muted">${t.location}</small></td><td><span class="badge ${this.priorityClass(t.priority)}">${t.priority}</span></td><td><span class="badge ${this.statusClass(t.status)}">${t.status}</span></td><td>${t.assignee}</td><td>${t.sla}%</td><td><a class="btn btn-sm btn-outline-primary" href="requester-ticket-detail.html?id=${t.id}">Xem</a></td></tr>`).join('');
  },
  initTicketList() {
    if(!document.querySelector('#ticketRows')) return;
    const all=this.getTickets(); this.renderTickets(all);
    const filter=()=>{const q=(document.querySelector('#ticketSearch')?.value||'').toLowerCase();const s=document.querySelector('#statusFilter')?.value||'';this.renderTickets(all.filter(t=>(!q||Object.values(t).join(' ').toLowerCase().includes(q))&&(!s||t.status===s)));};
    document.querySelector('#ticketSearch')?.addEventListener('input',filter); document.querySelector('#statusFilter')?.addEventListener('change',filter);
  },
  initCreateForm() {
    const form=document.querySelector('#ticketForm'); if(!form) return;
    const assetSelect=document.querySelector('#assetSelect'), locationInput=document.querySelector('#locationInput');
    this.getAssets().forEach(a=>{const o=document.createElement('option');o.value=a.id;o.textContent=`${a.name} — ${a.location}`;o.dataset.location=a.location;assetSelect?.appendChild(o);});
    assetSelect?.addEventListener('change',()=>{const selected=assetSelect.options[assetSelect.selectedIndex];locationInput.value=selected?.dataset.location||'';locationInput.readOnly=!!locationInput.value;});
    form.addEventListener('submit',e=>{e.preventDefault();if(!form.checkValidity()){form.classList.add('was-validated');return;}const selected=assetSelect.options[assetSelect.selectedIndex];const tickets=this.getTickets();const newTicket={id:`TK-${1043+tickets.length-4}`,asset:selected.textContent.split(' — ')[0],location:locationInput.value,priority:document.querySelector('#prioritySelect').value,status:'Chờ phân công',assignee:'Chưa gán',created:new Date().toLocaleDateString('vi-VN'),sla:0,description:document.querySelector('#descriptionInput').value};tickets.unshift(newTicket);this.saveTickets(tickets);document.querySelector('#formResult').innerHTML='<div class="alert alert-success">Tạo yêu cầu thành công. Mã ticket: <b>'+newTicket.id+'</b>. Danh sách đã được cập nhật.</div>';form.reset();locationInput.readOnly=false;form.classList.remove('was-validated');});
    document.querySelector('#aiClassify')?.addEventListener('click',()=>{const box=document.querySelector('#aiResult');box.className='alert alert-info mt-3';box.textContent='AI đang phân tích mô tả lỗi...';setTimeout(()=>{box.className='alert ai-box mt-3';box.innerHTML='<b>Gợi ý AI:</b> Nhóm Điện - Thiết bị trình chiếu · Độ chắc chắn 82%. <button class="btn btn-sm btn-success ms-2" type="button" id="acceptAi">Chấp nhận</button> <button class="btn btn-sm btn-outline-secondary" type="button" onclick="document.querySelector(\'#aiResult\').classList.add(\'d-none\')">Bỏ qua</button>';},700);});
  },
  initDetail() { const box=document.querySelector('#detailContent');if(!box)return;const id=new URLSearchParams(location.search).get('id')||'TK-1042';const t=this.getTickets().find(x=>x.id===id)||this.getTickets()[0];box.querySelector('[data-field="id"]').textContent=t.id;box.querySelector('[data-field="asset"]').textContent=t.asset;box.querySelector('[data-field="location"]').textContent=t.location;box.querySelector('[data-field="status"]').textContent=t.status;box.querySelector('[data-field="description"]').textContent=t.description||'Chưa có mô tả';},
  initSearchTables(){document.querySelectorAll('[data-table-search]').forEach(input=>input.addEventListener('input',()=>{const q=input.value.toLowerCase();document.querySelectorAll(input.dataset.tableSearch+' tbody tr').forEach(row=>row.classList.toggle('d-none',!row.innerText.toLowerCase().includes(q)));}));},
  init(){this.initTicketList();this.initCreateForm();this.initDetail();this.initSearchTables();}
};
document.addEventListener('DOMContentLoaded',()=>FixFlow.init());
