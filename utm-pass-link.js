// fungsi untuk nemabahkan utm source kedalam text parameter di href
function func_name( target ) {
  // dapatkan elementnya
  let element = document.querySelectorAll( target );

  element.forEach( ( value )=> {
    // dapatkan element baru
    element = value;
    
    // ambil semua parameter dari href
    const href = new URLSearchParams(element.getAttribute("href"));
    
    // ambil semua parameter dari url
    const url = new URLSearchParams(window.location.search);
    
    // amankan utm_source dan text jika kosong
    let text = (href.get("text")) ? href.get("text") : '';
    let utm_source = (url.get("utm_source")) ? url.get("utm_source") : '';
  
    // tambahkan href bagian text sebelumnya dengan utm_source dari url
    href.set("text", text + " " + utm_source);
    
    // set kembali attributenya
    element.setAttribute("href", href.toString());
  });
}


// cara pemanggilan function
func_name(".utm-pass")