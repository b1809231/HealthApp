/* eslint-disable camelcase */
const dangnhap = (sdt, mk) =>
  // eslint-disable-next-line no-undef
  fetch('http://10.233.3.87:80/healthapp_api/dangnhap.php', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ sdt, mk }),
  }).then((res) => res.json());
export default dangnhap;
