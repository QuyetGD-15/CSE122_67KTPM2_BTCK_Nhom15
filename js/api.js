// API đơn giản: dùng fetch cho JSON, localStorage cho thay đổi của người dùng.
const FixFlowAPI = {
  async loadJson(path) {
    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error(`Không tải được dữ liệu: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  read(key, fallback = []) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; }
    catch (error) { console.error('Dữ liệu localStorage lỗi', error); return fallback; }
  },
  write(key, value) { localStorage.setItem(key, JSON.stringify(value)); },
  remove(key, id) { this.write(key, this.read(key).filter(item => item.id !== id)); }
};
