const my_utmParameters = [
    "source", 
    "medium", 
    "campaign",
    "location"
  ];

  function getAllUrlParams(url) {
    let obj = Object.fromEntries(new URLSearchParams(location.search));
    return obj;
  }
  /* Check if Lead Cookie already exist */
  var cookieExist = Cookies.get('Lead'); // => if false return undefined
  /* get URL params object */
  var getAllUrlParams = getAllUrlParams(); // return object
  /*Convert a JavaScript object into a string */
  var getAllUrlParamsJSON = JSON.stringify(getAllUrlParams);
  /* Check if the url with utm_parameters */
  let isEmpty = jQuery.isEmptyObject(getAllUrlParams); // return true/false

  /* Case 1 - if the page with parameters & no cockie exsist */
  if(!isEmpty && cookieExist === undefined){
    /* Set lead object for the cockies */
    console.log("Case 1 - parameters & no cockie exsist => Create Cockie");
    /* 
		## Set Cookies ##
		expires: If omitted, the cookie becomes a session cookie (This example)
    */
    createLead();
    setUTMformValues();
  }/*end if*/

  let compare = is_this_utm_equal_to_cockie_utm_values();

  if(!isEmpty && cookieExist !== undefined){
    /* it this utm params diff from current lead values create new lead*/
    if(!compare){
      /* Case 3 - cockie already exsist but with diff values Vs url utm parmas
			(remove current Lead and generate new one) 
      */
      console.log("Case 3 - lead Exist, but with diff parames");
      Cookies.remove('Lead');
      createLead();
      setUTMformValues();
    }else{
      console.log("Case 2 - lead exsist with this params");
      setUTMformValues();
    }
  }

  /* Case 4 - cookie Exist  but page without any utm param */
  if(isEmpty && cookieExist !== undefined){
    console.log("Case 4 - cookie Exist  but page without any utm param");
    setUTMformValues();
  }

  function createLead(){
    var lead = {
      parameters: getAllUrlParams
    };
    /* if you want to add 2 days expires for example: 
   Cookies.set('Lead', 'lead', { expires: 2}) 
   */
    Cookies.set('Lead', lead, { });
  }

  /* check if this utm url equal to the current values of cockie lead */
  function is_this_utm_equal_to_cockie_utm_values(){
    for (const this_utm_element of my_utmParameters) {
      /* if utm_source exist */
      let value_exsist = JSON.parse(cookieExist).parameters[this_utm_element] == getAllUrlParams[this_utm_element];
      //console.log(`${value_exsist} - ${JSON.parse(cookieExist).parameters[this_utm_element]} compare to: ${getAllUrlParams[this_utm_element]}`);
      if(value_exsist == false){
        return false;
      }
    }/* end for loop */
    return true;
  }

  function setUTMformValues(){  
    /* webflow form object (Add embed code under webflow designer inside FORM */
    /*
		<input type="text" class="utm_source" placeholder="utm_source" name="utm_source">
<input type="text" class="utm_medium" placeholder="utm_medium" name="utm_medium">
<input type="text" class="utm_campaign" placeholder="utm_campaign" name="utm_campaign">
	*/
    /* the value if the param is empty */
    const empty_param_case = "null";
    /* set feilds */
    for (const this_utm_element of my_utmParameters) {
      /* if utm_source exist */
      set_utm_feild(this_utm_element);
    }/* end for loop */

    /* inner function */
    function set_utm_feild(utm_type){
      let utm_value = JSON.parse(Cookies.get('Lead')).parameters[utm_type];
      let utm_nodes = document.getElementsByClassName(utm_type);
      /* change all utm form feilds */
      if(utm_nodes.length > 0){
        for(var i = 0; i < utm_nodes.length; i++)
        {
          if(!!utm_value && utm_value !== undefined){
            utm_nodes[i].value = utm_value;
          }
          else{
            /* empty param for example ?utm_campaign= or ?utm_campaign */
            utm_nodes[i].value = empty_param_case;
          }
        }/* end for */
      }/* end if */
    }// end inner set_utm_feild function */
  }
