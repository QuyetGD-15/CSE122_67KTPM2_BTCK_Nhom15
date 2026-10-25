// Module nghiệp vụ quản lý/quản trị.
function archiveAsset(id) {
  const assets = FixFlowAPI.read('fixflow_assets', FixFlow.assets).map(asset => asset.id === id ? { ...asset, status: 'Đã lưu trữ' } : asset);
  FixFlowAPI.write('fixflow_assets', assets); return assets;
}
function assignTicketToTechnician(id, assignee) { return assignTechnician(id, assignee); }
