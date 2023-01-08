function func_name( target ) {
  let element = document.querySelectorAll( target );

  element.forEach( ( value )=> {
    element = value;

    const href = new URLSearchParams(element.getAttribute("href"));

    const url = new URLSearchParams(window.location.search);

    let text = (href.get("text")) ? href.get("text") : '';
    let utm_source = (url.get("utm_source")) ? url.get("utm_source") : '';

    href.set("text", text + " " + utm_source);

    let result = href.toString();
    result = result.replace("%3A", ":", result);
    result = result.replaceAll("%2F", "/", result);
    result = result.replace("%3F", "?", result);
    result = result.replace("+", "%2B", result);

    element.setAttribute("href", result);
  });
}

func_name(".utm-pass")