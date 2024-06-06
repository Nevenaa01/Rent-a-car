Vue.component("prikazJednogObjekta", {
	data: function () {
		return {
			id: null,
			objekat: {uri: null, naziv: null, radnoVreme: null, status: null, lokacija: {id: null, duzina: null, sirina: null, adresa: null}, ocena: null, vozila: null},
			
			ulogovan: null,
			korisnik:{korisnickoIme:"",uloga:"",ime:"",prezime:"",pol:"",datumRodjenja:"",lozinka:"",id:""},
			komentari: [],
			kupci: [],
		     admin:null,
		     kupac:null,
			map: null
		}
	},
	template: ` 
 	<div class="pozadina">
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
		<br><br><br>
		<div class="container-fluid">
			<table class="styled-table">
				<thead>
					<tr>
						<th class="centralnoPoravnanje logoTd">Logo</th>
						<th class="centralnoPoravnanje">Naziv</th>
						<th class="centralnoPoravnanje">RadnoVreme</th>
						<th class="centralnoPoravnanje">Status</th>
						<th class="centralnoPoravnanje">Lokacija</th>
						<th class="centralnoPoravnanje">Ocena</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="logoTd">
							<div class="imageDiv">
								<img v-bind:src = "objekat.uri" class="imageClass"/>
							</div>
						</td>
						<td>{{objekat.naziv}}</td>
						<td>{{objekat.radnoVreme}}</td>
						<td>{{objekat.status}}</td>
						<td @click="viewOnMap(objekat.lokacija.duzina,objekat.lokacija.sirina)">{{objekat.lokacija.adresa}}</td>
						<td class="centralnoPoravnanje">{{objekat.ocena}}</td>
					</tr>
				</tbody>
			</table><br><br> 
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-4">
					<div class="row pretraga bg-white shadow rounded sadrzajDiva">
						<div style="padding-right: 0%" class="row">
			            	<div class="col-sm-12">
			            		<h4 class="headerUDivu">Komentari</h4>
			            	</div>
			            	<div class="col-sm-12 comment" v-if="komentari.length == 0">
			            		<p>Nema komentara</p>
			            	</div>
			            	<div class="col-sm-12 comment" v-if="komentari.length > 0">
			            		<div class="comment-section" v-for="(k, index) in komentari">
							      <div class="comment-author">{{k.korisnickoIme}}</div>
							      <div class="comment-content">Sadrzaj: {{k.komentar}}</div>
							      <div class="comment-content">
									  Ocena:
									  <span class="text-warning">
									    <i v-for="star in k.ocena" :key="star" class="bi bi-star-fill">	
										    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
											  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
											</svg>
										</i>
									  </span>
									</div>	
							   	  <div class="comment-content" v-if="admin">({{k.status}})</div>
							      <hr v-if="index + 1 !== komentari.length">
							    </div>
							</div>
			            </div>
					</div>
				</div>
				<div class="col-sm-8 pe-20">
					<table class="styled-table">
						<thead>
							<tr>
								<th class="centralnoPoravnanje logoTd">Slika</th>
								<th class="centralnoPoravnanje">Marka</th>
								<th class="centralnoPoravnanje">Model</th>
								<th class="centralnoPoravnanje">Cena</th>
								<th class="centralnoPoravnanje">Tip</th>
								<th class="centralnoPoravnanje">Vrsta</th>
								<th class="centralnoPoravnanje">Tip goriva</th>
								<th class="centralnoPoravnanje">Potrosnja</th>
								<th class="centralnoPoravnanje">Broj vrata</th>
								<th class="centralnoPoravnanje">Broj osoba</th>
								<th class="centralnoPoravnanje">Opis</th>
								<th class="centralnoPoravnanje">Status</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(v, index) in objekat.vozila">
								<td class="logoTd">
									<div class="imageDiv">
										<img v-bind:src = "v.slika" class="imageClass"/>
									</div>
								</td>
								<td>{{v.marka}}</td>
								<td>{{v.model}}</td>
								<td class="centralnoPoravnanje">{{v.cena}}</td>
								<td>{{v.tip}}</td>
								<td >{{v.vrsta}}</td>
								<td>{{v.tipGoriva}}</td>
								<td class="centralnoPoravnanje">{{v.potrosnja}}</td>
								<td class="centralnoPoravnanje">{{v.brojVrata}}</td>
								<td class="centralnoPoravnanje">{{v.brojOsoba}}</td>
								<td>{{v.opis}}</td>
								<td>{{v.status}}</td>
							</tr>
						</tbody>
					</table><br><br>
				</div>
				
				<div class="col-sm-12">
					<div id="map" style="width: 100%; height: 400px;"></div>
				</div>
			</div>
			</div>

 					<footer class="text-center text-lg-start text-white d-flex flex-column">
					    <section class="d-flex justify-content-between p-4 footerSocijalneMreze">
					      <div class="me-5">
					        <span>Posetite nas i na društvenim mrežma:</span>
					      </div>
					      
					      <div>
					        <a href="https://www.facebook.com/" class="text-white me-4">
					          <i class="fa fa-facebook"></i>
					        </a>
					        <a href="https://www.twitter.com/" class="text-white me-4">
					          <i class="fa fa-twitter"></i>
					        </a>
					        <a href="https://www.google.com/" class="text-white me-4">
					          <i class="fa fa-google"></i>
					        </a>
					        <a href="https://www.instagram.com/" class="text-white me-4">
					          <i class="fa fa-instagram"></i>
					        </a>
					        <a href="https://www.linkedin.com/" class="text-white me-4">
					          <i class="fa fa-linkedin"></i>
					        </a>
					        <a href="https://www.pinterest.com/" class="text-white me-4">
					          <i class="fa fa-pinterest"></i>
					        </a>
					      </div>
					    </section>
					
					    <section>
					      <div class="text-center text-md-start mt-5">
					        <div class="row mt-3">
					          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ps-0">
					            <h6 class="text-uppercase fw-bold">Rent A Car - F1 edition</h6>
					            <hr class="mb-4 mt-0 d-inline-block mx-auto footerHr"/>
					            <p>
					              Rent A Car - F1 edition je sajt sa željom da pomogne i ponudi 
					              vozila koja će učiniti da se osećate kao da ste
					              pravi vozač F1.
					            </p>
					          </div>

					          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
					            <h6 class="text-uppercase fw-bold">Vozila</h6>
					            <hr class="mb-4 mt-0 d-inline-block mx-auto footerHr"/>
					            <p class="text-white">
					            	Automobil
					            </p>
					            <p class="text-white">
					            	Kombi
					            </p>
					            <p class="text-white">
					            	Mobilehome
					            </p>
					          </div>

					          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4 ps-2">
					            <h6 class="text-uppercase fw-bold">Korisni linkovi</h6>
					            <hr class="mb-4 mt-0 d-inline-block mx-auto footerHr"/>
					            <p>
					              <a v-bind:href="'/WebShopREST/#/'" class="text-white">Rent a car objekti</a>
					            </p>
					            <p>
					              <a v-bind:href="'/WebShopREST/#/profil/'" class="text-white">Profil</a>
					            </p>
					            <p>
					              <a href="#!" class="text-white">Dodati kad bude vise stranica</a>
					            </p>
					            <p>
					              <a href="#!" class="text-white">Dodati kad bude vise stranica</a>
					            </p>
					          </div>

					          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">
					            <!-- Links -->
					            <h6 class="text-uppercase fw-bold">Kontakt</h6>
					            <hr class="mb-4 mt-0 d-inline-block mx-auto footerHr"/>
					            <p><i class="fa fa-home mr-3"></i> Novi Sad, Srbija</p>
					            <p><i class="fa fa-envelope mr-3"></i> najjaciTim@gmail.com</p>
					            <p><i class="fa fa-phone mr-3"></i> +381 61 234 5678</p>
					            <p><i class="fa fa-print mr-3"></i> +381 61 234 5678</p>
					          </div>
					        </div>
					      </div>
					    </section>
					  </footer>
				  
	</div>
	`
	,
	methods: {
		
		initializeMap:function(){
            this.map = new ol.Map({
            target: 'map', // The ID of the map container element
            layers: [
                  new ol.layer.Tile({
                source: new ol.source.OSM(), // OpenStreetMap as the tile source
          }),
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat([0, 0]), // Center the map at [0, 0] (longitude, latitude)
              zoom: 2, // Initial zoom level
            }),
          });
      	},
      	
      	viewOnMap:function(lat,lon){
            event.stopPropagation();
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
            //REMOVES A LAYER
            const layerId = 'myLayer'; 
              const layerToRemove = this.map.getLayers().getArray().find(layer => layer.get('id') === layerId);
    
              if (layerToRemove) {
            
                this.map.removeLayer(layerToRemove);
              }
              
            layer.set('id', 'myLayer');
            this.map.addLayer(layer);
            
            var view = new ol.View({
              center: ol.proj.fromLonLat([lon, lat]), // Convert coordinates to the map's projection
              zoom: 10, // Adjust the zoom level as needed
            });
            this.map.setView(view);
            
            }
		
	},
	mounted() {
		
		this.initializeMap();
		
		this.id = this.$route.params.indx
		axios
			.get('rest/rentACarObjekat/dobaviObjekat/' + this.id)
			.then(response => {
				this.objekat = response.data
				return axios.post('rest/korisnik/ulogovan');
					})
			.then(response => 
			{
				this.korisnik=response.data;
				if(this.korisnik)
					this.ulogovan=true;
				else
					this.ulogovan=false;
				if(this.korisnik.uloga==="Administrator" || this.korisnik.uloga==="Menadzer")
					this.admin=true;
				else
					this.admin=false;
				if(this.korisnik.uloga === "Kupac")
					this.kupac = true;
				else
					this.kupac = false;	

				if(this.admin)
					return axios.get('rest/komentar/dobaviSveKomentarePoIdObjekta/' + this.objekat.id)
				else
					return axios.get('rest/komentar/dobaviKomentarePoIdObjekta/' + this.objekat.id)
			})
			.then(response =>{
				this.komentari = response.data;
			})
	}
});