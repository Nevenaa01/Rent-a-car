Vue.component("KreiranjeObjekta", {
	data: function () {
		    return {
			objekat:{naziv:null,geografskaDuzina:null,geografskaSirina:null,adresa:null,broj:null,grad:null,postanskiBroj:null,radnoVreme:null,uri:null,menadzer:null},
		      menadzeri:null,
		      validanNaziv: true,
		      validnaSirina: true,
		      validnaDuzina: true,
		      validnaUlica: true,
		      validanBroj: true,
		      validanGrad: true,
		      validanPostanskiBroj: true,
		      validnoRadnoVreme: true,
		      validanLogo:true,
		      validanMenadzer:true,
		      ulogovan: null,
		      admin:null,
		      upisiMenadzera:null,
		      korisnik:{korisnickoIme:"",uloga:"",ime:"",prezime:"",pol:"",datumRodjenja:"",lozinka:"",id:""},
		      menadzer:null,
		      kreiranMenadzer:true,
		      imeMenadzera:null,
		      admin: null,
		    	menadzer:null,
		    	kupac:null,
		    	map: null
		    }
	},
	template: ` 
 	<div>
 	<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" v-bind:href="'/WebShopREST/#/'">Rent A Car - F1 edition</a>
                        </div>
                        <ul class="vr text-light m-0 p-0">

                       </ul>
                        <ul class="navbar-nav w-75">
                            <li><a v-bind:href="'/WebShopREST/#/'" class="nav-link active">Objekti</a></li>
                            <li><a v-bind:href="'/WebShopREST/#/profil/'+this.korisnik.korisnickoIme" class="nav-link" v-if="ulogovan">Profil</a></li>
                        </ul>
                        
                        <ul class="navbar-nav navbar-right w-25 justify-content-end">
                            <li><a v-bind:href="'/WebShopREST/#/loggovanje'" class="nav-link" v-if="!ulogovan"><span class="glyphicon glyphicon-log-in"></span> Uloguj se</a></li>
                            <li><a v-bind:href="'/WebShopREST/#/registracija'" class="nav-link" v-if="!ulogovan"><span class="glyphicon glyphicon-log-in"></span> Registuj se</a></li>
                        </ul>
                    </div>
                </nav>

 		<div class="pozadina1">	
 				<br><br><br>
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                  <h3 class="mb-3"></h3>
                    <div class="bg-white shadow rounded">
                        <div class="row">
                            <div class="col-md-7 pe-0">
                                <div class="form-left h-100 py-5 px-5">
                                    <form action="" class="row g-4">
                                            <div class="col-12">
                                                <label>Unesite naziv</label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="bi bi-person-fill"></i></div>
                                                    <input type="text" v-model="objekat.naziv" v-bind:class="{red: !validanNaziv}" placeholder="Unesite naziv" class="form-control">
                                                </div>
                                                <div><label v-if="!validanNaziv" class="invalidInputs">*Nevalidan naziv</label></div>
                                            </div>

                                            <div class="col-sm-12">
					                            <label>Lokacija</label>
					                                <div class="input-group">
														<div id="map" style="width: 100%; height: 400px;"></div>
					                                </div>
					                        </div><br>	
                                            
                                            <div class="col-12">
                                                <label>Radno vreme</label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                    <input type="text" v-model="objekat.radnoVreme" v-bind:class="{red: !validnoRadnoVreme}" placeholder="07.00 - 15.00" class="form-control">                                                
                                                </div>
                                                <div><label v-if="!validnoRadnoVreme" class="invalidInputs">*Nevalidno radno vreme</label></div>
                                            </div>
                                            
                                            <div class="col-12">
                                                <label>Logo</label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                    <input type="text" v-model="objekat.uri" v-bind:class="{red: !validanLogo}" placeholder="URL logo-a" class="form-control">                                                
                                                </div>
                                                <div><label v-if="!validanLogo" class="invalidInputs">*Nevalidan URL</label></div>
                                            </div>
                                            
                                            <div class="col-12" v-if="!upisiMenadzera && kreiranMenadzer">
                                                <label>Menadzer</label>
                                                <div class="input-group">
                                                    <select v-model="menadzer">
													    <option v-for="item in menadzeri" :value="item">{{item.korisnickoIme}}</option>
													</select>
                                                </div>
                                                <div><label v-if="!validanMenadzer" class="invalidInputs">*Izaberite pol</label></div>
                                            </div>
                                            
                                            <div class="col-12" v-if="upisiMenadzera">
                                                <button  type="submit" v-on:click="kreirajMenadzera" class="btn btn-primary px-4 float-end mt-4">Kreiraj menadzera</button>
                                            </div>
                                            
     								        <div class="col-12">
                                                <button type="submit" v-on:click="kreiraj" class="btn btn-primary px-4 float-end mt-4">Kreiraj</button>
                                            </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-5 ps-0 d-none d-md-block">
                                <div class="form-right text-white text-center pt-5 divForma">
                                    <i class="bi bi-bootstrap"></i>
                                    <h2 class="fs-1">Kreirajte RentACar objekat!</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
	</div>	
	`
	, 
	methods : {
		kreiraj : function(){
			event.preventDefault()
			
			this.validanNaziv= !(this.objekat.naziv === null || this.objekat.naziv === "")
			this.validnaSirina= !(this.objekat.geografskaSirina === null || this.objekat.geografskaSirina === "")
			this.validnaDuzina= !(this.objekat.geografskaDuzina === null || this.objekat.geografskaDuzina === "")
			this.validnaUlica= !(this.objekat.adresa === null || this.objekat.adresa === "")
		    this.validanBroj=!(this.objekat.broj === null || this.objekat.broj === "")
		    this.validanGrad=!(this.objekat.grad === null || this.objekat.grad === "")
		    this.validanPostanskiBroj=!(this.objekat.postanskiBroj === null || this.objekat.postanskiBroj === "")
		   	this.validnoRadnoVreme=!(this.objekat.radnoVreme === null || this.objekat.radnoVreme === "")
		   	this.validanLogo=!(this.objekat.uri===null || this.objekat.uri==="")
		   	
		   	const regex = /^\d{2}.\d{2} - \d{2}.\d{2}$/
		   	
		   	if(regex.test(this.objekat.radnoVreme))
		   		this.validnoRadnoVreme = true
		   	else 
		   		this.validnoRadnoVreme = false
		   	
			if(this.validanNaziv && this.validnaSirina && this.validnaDuzina && this.validnaUlica && this.validanBroj&& this.validanPostanskiBroj && this.validanGrad &&  this.validnoRadnoVreme&&this.validanLogo){
				
				if(this.imeMenadzera)
					this.objekat.menadzer=this.imeMenadzera
				else
					this.objekat.menadzer=this.menadzer.korisnickoIme
				axios
					.post('rest/rentACarObjekat/kreiraj',this.objekat)
					.then(response => {
						
						const validan = response.data;
						if(validan){
							alert("Uspesno ste kreirali objekat")
							router.push(`/`)
							return axios.put("rest/menadzer/dodeliobjekat",this.objekat)
						}
						else{
							alert("Greska priliom kreiranja")
						}
					}).then(response=>
						{
							const valid=response.data;
							if(valid)
								alert("Uspeno!");
							else
								alert("Neuspesno!");
							return axios.post('rest/lokacije/kreiraj',this.objekat);
						}).then(response => {
							const valid=response.data;
							if(valid)
								alert("Uspeno lokacija!");
							else
								alert("Neuspesno lokacija!");
						})
					//alert(this.objekat.naziv+" "+this.objekat.geografskaSirina+" "+this.objekat.geografskaDuzina+" "+this.objekat.adresa+" "+this.objekat.broj+" "+this.objekat.grad+" "+this.objekat.postanskiBroj+" "+this.objekat.radnoVreme+" "+this.objekat.uri)
			}
		},
		kreirajMenadzera:function()
		{
				router.push(`/registracija`)
		},
		
		initializeMap:function(){
            this.map = new ol.Map({
            target: 'map',
            layers: [
                  new ol.layer.Tile({
                source: new ol.source.OSM(),
          }),
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat([0, 0]), 
              zoom: 2, 
            }),
          });
        }
	},
	mounted(){
		this.initializeMap();
		
		var view = new ol.View({
          center: ol.proj.fromLonLat([21.0059, 44.0165]), 
          zoom: 5, 
        });
        this.map.setView(view);
		
		var ovo=this;
	  	this.map.on('click', function (evt) {
  
    	
    	const coords_click = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
    	
    	const lon = coords_click[0];
    	const lat = coords_click[1];
    	
		const data_for_url = {lon: lon, lat: lat, format: "json", limit: 1};
	    const encoded_data = Object.keys(data_for_url).map(function (k) {
	        return encodeURIComponent(k) + '=' + encodeURIComponent(data_for_url[k])
	    }).join('&');

    	const url_nominatim = 'https://nominatim.openstreetmap.org/reverse?' + encoded_data;
    	
		const layer = new ol.layer.Vector({
		source: new ol.source.Vector({
    	features: [
    	new ol.Feature({
        	geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
    	})
    	]
		}),
		style: new ol.style.Style({
		    image: new ol.style.Icon({
		    anchor: [0.5, 1],
		    crossOrigin: 'anonymous',
		    src: 'https://docs.maptiler.com/openlayers/default-marker/marker-icon.png',
		    })
		})
		});
		
		const layerId = 'myLayer'; 
      	const layerToRemove = ovo.map.getLayers().getArray().find(layer => layer.get('id') === layerId);

      	if (layerToRemove) {
        
        	ovo.map.removeLayer(layerToRemove);
      	}
      	
		layer.set('id', 'myLayer');
		ovo.map.addLayer(layer);
	

    
	    httpGet(url_nominatim, function (response_text) {   
	        const data_json = JSON.parse(response_text);   
	        const res_lon = data_json.lon;
	        const res_lat = data_json.lat;
	        const res_address = data_json.address;
	        
	        const address_display_name  = data_json.display_name;
	        const address_postcode      = res_address.postcode;
	        const address_city          = res_address.city;
	        const address_house_number  = res_address.house_number;
	        const address_road          = res_address.road;
	        
	       ovo.objekat.geografskaDuzina = res_lon;
			ovo.objekat.geografskaSirina = res_lat;
	       
			ovo.objekat.adresa = address_road + "," + address_house_number + "," + address_city + "," + address_postcode;
	       
			ovo.objekat.broj = address_house_number;
	        
			ovo.objekat.grad = address_city;
	        
			ovo.objekat.postanskiBroj = address_postcode;
	        
	 
	    });
	});
		
		if(this.$route.params.korIme!=="menadzer")
		{
			this.imeMenadzera=this.$route.params.korIme;
			this.kreiranMenadzer=false;
		}
			axios.post('rest/korisnik/ulogovan')
			.then(response => 
			{
				this.korisnik=response.data;
				if(this.korisnik)
				{
						this.ulogovan=true;
						
				}
					else
						this.ulogovan=false;
						
				if(this.korisnik.uloga==="Administrator")
						this.admin=true;
				else
						this.admin=false;
				if(this.korisnik.uloga==="Menadzer")
						this.menadzer=true;
				else
						this.menadzer=false;
				if(this.korisnik.uloga === "Kupac")
						this.kupac = true;
				else
						this.kupac = false;			
						
			
				return axios.
                        get('rest/menadzer/ucitajslobodne')
			})
			.then(response=>
			{
				this.menadzeri=response.data
				if(this.menadzeri.length )
					this.upisiMenadzera=false;
				else
					this.upisiMenadzera=true;
			})
	}
	
});
function httpGet(url, callback_function) {

    const getRequest = new XMLHttpRequest();
    getRequest.open("get", url, true);

    getRequest.addEventListener("readystatechange", function () {

        if (getRequest.readyState === 4 && getRequest.status === 200) {

            callback_function(getRequest.responseText);
        }
    });

    getRequest.send();
}
