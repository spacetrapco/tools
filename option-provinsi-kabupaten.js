const provinsiSelect = document.getElementById("provinsi");
const kabupatenSelect = document.getElementById("kabupaten");

const districtData = {
    "Aceh": ["Kab Aceh Barat", "Kab Aceh Barat Daya", "Kab Aceh Besar", "Kab Aceh Jaya", "Kab Aceh Selatan", "Kab Aceh Singkil", "Kab Aceh Tamiang", "Kab Aceh Tengah", "Kab Aceh Tenggara", "Kab Aceh Timur", "Kab Aceh Utara	", "Kab Bener Meriah", "Kab Bireuen", "Kab Gayo Lues", "Kab. Nagan Raya", "Kab Pidie", "Kab Pidie Jaya", "Kab Simeulue", "Kota Banda Aceh", "Kota Langsa", "Kota Lhokseumawe", "Kota Sabang", "Kota Subulussalam" ],
    "Sumatra Utara": ["Kabupaten Asahan", "Kabupaten Batu Bara", "Kabupaten Dairi", "Kabupaten Deli Serdang", "Kabupaten Humbang Hasundutan", "Kabupaten Karo", "Kabupaten Labuhanbatu", "Kabupaten Labuhanbatu Selatan", "Kabupaten Labuhanbatu Utara", "Kabupaten Langkat", "Kabupaten Mandailing Natal", "Kabupaten Nias", "Kabupaten Nias Barat", "Kabupaten Nias Selatan", "Kabupaten Nias Utara", "Kabupaten Padang Lawas", "Kabupaten Padang Lawas Utara", "Kabupaten Pakpak Bharat", "Kabupaten Samosir", "Kabupaten Serdang Bedagai", "Kabupaten Simalungun", "Kabupaten Tapanuli Selatan", "Kabupaten Tapanuli Tengah", "Kabupaten Tapanuli Utara", "Kabupaten Toba", "Kota Binjai", "Kota Gunungsitoli", "Kota Medan", "Kota Padang Sidempuan", "Kota Pematangsiantar", "Kota Sibolga", "Kota Tanjungbalai", "Kota Tebing Tinggi"],
    "Sumatra Barat": ["Kabupaten Agam", "Kabupaten Dharmasraya", "Kabupaten Kepulauan Mentawai", "Kabupaten Lima Puluh Kota", "Kabupaten Padang Pariaman", "Kabupaten Pasaman", "Kabupaten Pasaman Barat", "Kabupaten Pesisir Selatan", "Kabupaten Sijunjung", "Kabupaten Solok", "Kabupaten Solok Selatan", "Kabupaten Tanah Datar", "Kota Bukittinggi", "Kota Padang", "Kota Padang Panjang", "Kota Pariaman", "Kota Payakumbuh", "Kota Sawahlunto", "Kota Solok"],
    "Riau": ["Kabupaten Bengkalis", "Kabupaten Indragiri Hilir", "Kabupaten Indragiri Hulu", "Kabupaten Kampar", "Kabupaten Kepulauan Meranti", "Kabupaten Kuantan Singingi", "Kabupaten Pelalawan", "Kabupaten Rokan Hilir", "Kabupaten Rokan Hulu", "Kabupaten Siak", "Kota Dumai", "Kota Pekanbaru"],
    "Jambi": ["Kabupaten Batanghari", "Kabupaten Bungo", "Kabupaten Kerinci", "Kabupaten Merangin", "Kabupaten Muaro Jambi", "Kabupaten Sarolangun", "Kabupaten Tanjung Jabung Barat", "Kabupaten Tanjung Jabung Timur", "Kabupaten Tebo", "Kota Jambi", "Kota Sungai Penuh"],
    "Sumatera Selatan": ["Kabupaten Banyuasin", "Kabupaten Empat Lawang", "Kabupaten Lahat", "Kabupaten Muara Enim", "Kabupaten Musi Banyuasin", "Kabupaten Musi Rawas", "Kabupaten Musi Rawas Utara", "Kabupaten Ogan Ilir", "Kabupaten Ogan Komering Ilir", "Kabupaten Ogan Komering Ulu", "Kabupaten Ogan Komering Ulu Selatan", "Kabupaten Ogan Komering Ulu Selatan", "Kabupaten Ogan Komering Ulu Timur", "Kabupaten Penukal Abab Lematang Ilir", "Kota Lubuklinggau", "Kota Pagar Alam", "Kota Palembang", "Kota Prabumulih"],
    "Bengkulu": ["Kabupaten Bengkulu Selatan", "Kabupaten Bengkulu Tengah", "Kabupaten Bengkulu Utara", "Kabupaten Kaur", "Kabupaten Kepahiang", "Kabupaten Lebong", "Kabupaten Mukomuko", "Kabupaten Rejang Lebong", "Kabupaten Seluma", "Kota Bengkulu"],
    "Lampung": ["Kabupaten Lampung Barat", "Kabupaten Lampung Selatan", "Kabupaten Lampung Tengah", "Kabupaten Lampung Timur", "Kabupaten Lampung Utara", "Kabupaten Mesuji", "Kabupaten Pesawaran", "Kabupaten Pesisir Barat", "Kabupaten Pringsewu", "Kabupaten Tanggamus", "Kabupaten Tulang Bawang", "Kabupaten Tulang Bawang Barat", "Kabupaten Way Kanan", "Kota Bandar Lampung", "Kota Metro"],
    "Kepulauan Bangka Belitung": ["Kabupaten Bangka", "Kabupaten Bangka Barat", "Kabupaten Bangka Selatan", "Kabupaten Bangka Tengah", "Kabupaten Belitung", "Kabupaten Belitung Timur", "Kota Pangkalpinang"],
    "Kepulauan Riau": ["Kabupaten Bintan", "Kabupaten Karimun", "Kabupaten Kepulauan Anambas", "Kabupaten Lingga", "Kabupaten Natuna", "Kota Batam", "Kota Tanjungpinang"],
    "DKI Jakarta": ["Kabupaten Administrasi Kepulauan Seribu", "Kota Administrasi Jakarta Barat", "Kota Administrasi Jakarta Pusat", "Kota Administrasi Jakarta Selatan", "Kota Administrasi Jakarta Timur", "Kota Administrasi Jakarta Utara"],
    "Jawa Barat": ["Kabupaten Bandung", "Kabupaten Bandung Barat", "Kabupaten Bekasi", "Kabupaten Bogor", "Kabupaten Ciamis", "Kabupaten Cianju", "Kabupaten Cirebon", "Kabupaten Garut", "Kabupaten Indramayu", "Kabupaten Karawang", "Kabupaten Kuningan", "Kabupaten Majalengka", "Kabupaten Pangandaran", "Kabupaten Purwakarta", "Kabupaten Subang", "Kabupaten Sukabumi", "Kabupaten Sumedang", "Kabupaten Tasikmalaya", "Kota Bandung", "Kota Banjar", "Kota Bekasi", "Kota Bogor", "Kota Cimahi", "Kota Cirebon", "Kota Depok", "Kota Sukabumi", "Kota Tasikmalaya"],
    "Jawa Tengah": ["Kabupaten Banjarnegara", "Kabupaten Banyumas", "Kabupaten Batang","Kabupaten Blora", "Kabupaten Boyolali", "Kabupaten Brebes", "Kabupaten Cilacap", "Kabupaten Demak", "Kabupaten Grobogan", "Kabupaten Jepara", "Kabupaten Karanganyar", "Kabupaten Kebumen", "Kabupaten Kendal", "Kabupaten Klaten", "Kabupaten Kudus", "Kabupaten Magelang", "Kabupaten Pati", "Kabupaten Pekalongan", "Kabupaten Pemalang", "Kabupaten Purbalingga", "Kabupaten Purworejo", "Kabupaten Rembang", "Kabupaten Semarang", "Kabupaten Sragen", "Kabupaten Sukoharjo", "Kabupaten Tegal", "Kabupaten Temanggung", "Kabupaten Wonogiri", "Kabupaten Wonosobo", "Kota Magelang", "Kota Pekalongan", "Kota Salatiga", "Kota Semarang", "Kota Surakarta", "Kota Tegal"],
    "Daerah Istimewa Yogyakarta": ["Kabupaten Bantul", "Kabupaten Gunungkidul", "Kabupaten Kulon Progo", "Kabupaten Sleman", "Kota Yogyakarta"],
    "Jawa Timur": ["Kabupaten Bangkalan", "Kabupaten Banyuwangi", "Kabupaten Blitar", "Kabupaten Bojonegoro", "Kabupaten Bondowoso", "Kabupaten Gresik", "Kabupaten Jember", "Kabupaten Jombang", "Kabupaten Kediri", "Kabupaten Lamongan", "Kabupaten Lumajang", "Kabupaten Madiun", "Kabupaten Magetan", "Kabupaten Malang", "Kabupaten Mojokerto", "Kabupaten Nganjuk", "Kabupaten Ngawi", "Kabupaten Pacitan", "Kabupaten Pamekasan", "Kabupaten Pasuruan", "Kabupaten Ponorogo", "Kabupaten Probolinggo", "Kabupaten Sampang", "Kabupaten Sidoarjo", "Kabupaten Situbondo", "Kabupaten Sumenep", "Kabupaten Trenggalek", "Kabupaten Tuban", "Kabupaten Tulungagung", "Kota Batu", "Kota Blitar", "Kota Kediri", "Kota Madiun", "Kota Malang", "Kota Mojokerto", "Kota Pasuruan", "Kota Probolinggo", "Kota Surabaya"],
    "Banten": ["Kabupaten Lebak", "Kabupaten Pandeglang", "Kabupaten Serang", "Kabupaten Tangerang", "Kota Cilegon", "Kota Serang", "Kota Tangerang", "Kota Tangerang Selatan"],
    "Bali": ["Kabupaten Badung", "Kabupaten Bangli", "Kabupaten Buleleng", "Kabupaten Gianyar", "Kabupaten Jembrana", "Kabupaten Karangasem", "Kabupaten Klungkung", "Kabupaten Tabanan", "Kota Denpasar"],
    "Nusa Tenggara Barat": ["Kabupaten Bima", "Kabupaten Dompu", "Kabupaten Lombok Barat", "Kabupaten Lombok Tengah", "Kabupaten Lombok Timur", "Kabupaten Lombok Utara", "Kabupaten Sumbawa", "Kabupaten Sumbawa Barat", "Kota Bima", "Kota Mataram"],
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