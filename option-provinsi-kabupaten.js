const provinsiSelect = document.getElementById("provinsi");
const kabupatenSelect = document.getElementById("kabupaten");

const districtData = {
    "state1": ["district1", "district2", "district3"],
    "state2": ["district4", "district5", "district6"],
    // Add more states and districts here
};

// Disable the district select until a state is selected
kabupatenSelect.disabled = true;

// Populate the options for the state select
for (const state in districtData) {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    provinsiSelect.appendChild(option);
}

// Handle the change event for the state select
provinsiSelect.addEventListener("change", (event) => {
    // Clear the current options in the district select
    kabupatenSelect.innerHTML = "";
    // Get the selected state
    const selectedState = event.target.value;
    // Populate the options for the district select
    for (const district of districtData[selectedState]) {
        const option = document.createElement("option");
        option.value = district;
        option.textContent = district;
        kabupatenSelect.appendChild(option);
    }
    // Enable the district select
    kabupatenSelect.disabled = false;
});