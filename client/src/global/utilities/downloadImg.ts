const handleDownloadImg = async (url: string) => {
  //url is the route of the app
  const response = await fetch(url, {
    method: "GET",
    headers: {},
  });
  response.arrayBuffer().then(function (buffer) {
    const url = window.URL.createObjectURL(new Blob([buffer]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "image.png"); //png or other extension
    document.body.appendChild(link);
    link.click();
  });
};

export default handleDownloadImg;
