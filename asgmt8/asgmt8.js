const recordObject = new XMLHttpRequest();
recordObject.open('get', 'data.json');
recordObject.send();
// eslint-disable-next-line func-names
recordObject.onreadystatechange = function () {
  if (recordObject.readyState === 4 && recordObject.status === 200) {
    const data = JSON.parse(recordObject.response);
    // eslint-disable-next-line no-console
    console.log(this.responseText);
    let dataContent = '';
    for (let i = 0; i < data.length; i += 1) {
      const record = data[i];
      dataContent += `<tr><td>${record.id} </td><td>${record.name}</td><td>${record.place}</td><td>${record.salary}</td></tr>`;
      document.getElementById('tableData').innerHTML = dataContent;
    }
  }
};
