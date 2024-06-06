Vue.component("prikazPorudzbinaMenadzer", {
	data: function () {
		return {		
			ulogovan: null,
			korisnik:{korisnickoIme:"",uloga:"",ime:"",prezime:"",pol:"",datumRodjenja:"",lozinka:"",id:""},
			menadzer: {},
			obrada:"obrada",
			preuzeto:"preuzeto",
			odobreno 	:"odobreno",
			porudzbine: {},
			zaOdbijanje:null,
			zasto:"",
			prazno:false,
			selektovanaPorudzbina:null,
			prikazFormeZaInformacije: false,
			kupac: []
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
                            <li><a v-bind:href="'/WebShopREST/#/'" class="nav-link">Objekti</a></li>
                            <li><a v-bind:href="'/WebShopREST/#/profil/'+this.korisnik.korisnickoIme" class="nav-link" v-if="ulogovan">Profil</a></li>
                        </ul>
                        
                        <ul class="navbar-nav navbar-right w-25 justify-content-end">
                            <li><a v-bind:href="'/WebShopREST/#/loggovanje'" class="nav-link" v-if="!ulogovan"><span class="glyphicon glyphicon-log-in"></span> Uloguj se</a></li>
                            <li><a v-bind:href="'/WebShopREST/#/registracija'" class="nav-link" v-if="!ulogovan"><span class="glyphicon glyphicon-log-in"></span> Registuj se</a></li>
                        </ul>
                    </div>
                </nav>
		<br><br><br>	 
		
		<div class="container-fluid" v-if="this.ulogovan">
			<div class="col-sm-12">
				<table class="styled-table">
						<thead>
							<tr>
								<th class="centralnoPoravnanje logoTd">Slika</th>
								<th class="centralnoPoravnanje">Marka</th>
								<th class="centralnoPoravnanje">Model</th>
								<th class="centralnoPoravnanje">Cena</th>
								<th class="centralnoPoravnanje">Tip goriva</th>
								<th class="centralnoPoravnanje">Kupac</th>
								<th class="centralnoPoravnanje">Pocetni datum</th>
								<th class="centralnoPoravnanje">Krajnji datum</th>
								<th class="centralnoPoravnanje">Status</th>
								<th class="centralnoPoravnanje"></th>
								<th class="centralnoPoravnanje"></th>
							</tr>
						</thead>
						<tbody>
							<template v-for="(porudzbina, index) in porudzbine">
						      <tr v-for="(vozilo, vIndex) in porudzbina.vozila">
						      	<td class="logoTd">
						      		<div class="imageDiv">
										<img v-bind:src = "vozilo.slika" class="imageClass"/>
									</div>
						      	</td>
						        <td>{{ vozilo.marka }}</td>
						        <td>{{ vozilo.model }}</td>
						        <td class="centralnoPoravnanje">{{ vozilo.cena }}</td>
						        <td>{{ vozilo.tipGoriva }}</td>
						        <td v-on:click="prikaziInformacijeOKupcu(porudzbina.korisnickoImeKupca)"><a href="#">{{porudzbina.kupac}}</a></td>
						        <td>{{
									new Date(porudzbina.datumIznajmljivanja.year,
									porudzbina.datumIznajmljivanja.monthValue - 1,
									porudzbina.datumIznajmljivanja.dayOfMonth).toLocaleDateString()
						        }}</td>
						        <td>{{
									new Date(porudzbina.datumIznajmljivanja.year,
									porudzbina.datumIznajmljivanja.monthValue - 1,
									porudzbina.datumIznajmljivanja.dayOfMonth + porudzbina.trajanjeNajma).toLocaleDateString()
								}}</td>
								<td>{{porudzbina.status}}</td>
								<td>
									<button type="submit" v-on:click="Prihvati(porudzbina.id)" class="btn px-4 float-end btnSearch" v-if="porudzbina.status==obrada">Prihvati</button>
									<button type="submit" v-on:click="Preuzmi(porudzbina.id)" class="btn px-4 float-end btnSearch" v-if="porudzbina.status==odobreno
									&& isPreuzeto(porudzbina)">Preuzeto</button>
									<button type="submit" v-on:click="Vrati(porudzbina.id)" class="btn px-4 float-end btnSearch" v-if="porudzbina.status==preuzeto">Vraceno</button>
								</td>
								<td><button type="submit" v-on:click="Odbij(porudzbina.id)" class="btn px-4 float-end btnSearch" v-if="porudzbina.status==obrada">Odbij</button></td>
						      </tr>
						    </template>
						</tbody>
				</table><br><br>
			</div>
			
			<div class="comment-overlay" v-if="prikazFormeZaInformacije"></div>
			    <div class="comment-form-container" v-if="prikazFormeZaInformacije">
			    	<div class="row pretraga bg-white shadow rounded sadrzajDiva">
				    	<div style="padding-right: 0%" class="row">
			            	<div class="col-sm-12">
			            		<h2 class="headerUDivu">Informacije o kupcu</h2>
			            	</div>
		            	</div>
		            	
		            	<div class="col-sm-12">
            			<label>Ime</label>
                		<div class="input-group inputPretraga">
                            <div class="input-group">
								<input type="text" v-model="kupac.ime" class="inputPretraga form-control" disabled></input>                                            
							</div>
						</div>
                    </div><br>
                    
                    <div class="col-sm-12">
            			<label>Prezime</label>
                		<div class="input-group inputPretraga">
                            <div class="input-group">
								<input type="text" v-model="kupac.prezime" class="inputPretraga form-control" disabled></input>                                            
							</div>
						</div>
                    </div><br>
                    
                     <div class="col-sm-12">
            			<label>Korisnicko ime</label>
                		<div class="input-group inputPretraga">
                            <div class="input-group">
								<input type="text" v-model="kupac.korisnickoIme" class="inputPretraga form-control" disabled></input>                                            
							</div>
						</div>
                    </div><br>
                    
                 	<div class="col-sm-12">
            			<label>Pol</label>
                		<div class="input-group inputPretraga">
                            <div class="input-group">
								<input type="text" v-model="kupac.pol" class="inputPretraga form-control" disabled></input>                                            
							</div>
						</div>
                    </div><br>
                    
                 	<div class="col-sm-12">
            			<label>Datum rodjenjaa</label>
                		<div class="input-group inputPretraga">
                            <div class="input-group">
								<input type="text" v-model="kupac.datumRodjenja" class="inputPretraga form-control" disabled></input>                                            
							</div>
						</div>
                    </div><br>
                    
			    	</div>
			    </div>
			</div>
		
		<div class="d-flex justify-content-center"  v-if="zaOdbijanje">
		  <div class="col-6">
		    <div>
		      <h2 for="opis">Zašto odbijate?</h2>
		      <br>
		      <textarea v-model="zasto" class="form-control" placeholder="Komentar..." rows="6" cols="50"></textarea>
		    </div>
		    <br><br>
		    <button type="submit" v-on:click="OdbijKonacno()" class="btn px-4 float-end btnSearch">Odbij</button>
		  </div>
		</div>
	<br><br><br><br>
			 <div v-if="!this.ulogovan">
	        	<label>Nisi ulogovan!</label><br>
	        	<a v-bind:href="'/WebShopREST/#/loggovanje'" class="nav-link">Uloguj se</a>
	        	<br><br><br><br>
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
		Prihvati:function(idx)
		{
			axios.put("rest/porudzbina/prihvati/"+idx)
			axios.get('rest/porudzbina/dobaviPorudzbinePoObjektima/' + this.menadzer.rentacarObjekat)
			.then(response =>{
				this.porudzbine = response.data
			})
			
		},
		Odbij:function(idx)
		{
			this.zaOdbijanje=true;
			this.selektovanaPorudzbina=idx;
		},
		OdbijKonacno: function()
		{
			if(this.zasto==="" || this.zasto===null)
				this.prazno=true;
			else
				this.prazno=false;
			if(!this.prazno)
			{
				axios.put("rest/porudzbina/odbijanje/"+this.selektovanaPorudzbina+"/"+this.zasto);
			}
			axios.get('rest/porudzbina/dobaviPorudzbinePoObjektima/' + this.menadzer.rentacarObjekat)
			.then(response =>{
				this.porudzbine = response.data
				this.zaOdbijanje=false;
			})
		},
		prikaziInformacijeOKupcu : function(korisnickoIme){
			this.prikazFormeZaInformacije = true;
			
			axios
				.get('rest/korisnik/ucitaj/' + korisnickoIme)
				.then(response =>{
					this.kupac = response.data
				})
		},
		handleKeyDown(event) {
	      if (event.keyCode === 27) {
	        this.prikazFormeZaInformacije = false;
	      }
 		},
 		isPreuzeto(p) {
			 
		     preuzetoDate= new Date(p.datumIznajmljivanja.year,
									p.datumIznajmljivanja.monthValue - 1,
									p.datumIznajmljivanja.dayOfMonth);
		      return preuzetoDate.getDate() === new Date().getDate() && preuzetoDate.getYear()===new Date().getYear() && preuzetoDate.getMonth()===new Date().getMonth();
		 },
		 Preuzmi:function(idx)
		 {
			 axios.put("rest/porudzbina/preuzeto/"+idx);
			 axios.put("rest/vozilo/zauzeto/"+idx);
			 axios.put("rest/rentACarObjekat/zauzeto/"+idx);
			
			 axios.get('rest/porudzbina/dobaviPorudzbinePoObjektima/' + this.menadzer.rentacarObjekat)
			 .then(response =>{
				this.porudzbine = response.data
			})
		 },
		 Vrati:function(idx)
		 {
			 axios.put("rest/porudzbina/vraceno/"+idx);
			 axios.put("rest/vozilo/oslobodjeno/"+idx);
			 axios.put("rest/rentACarObjekat/oslobodjeno/"+idx);
			
			 axios.get('rest/porudzbina/dobaviPorudzbinePoObjektima/' + this.menadzer.rentacarObjekat)
			 .then(response =>{
				this.porudzbine = response.data
			})
		 } 
	},
	mounted() {				
		document.addEventListener('keydown', this.handleKeyDown);
		
		axios.post('rest/korisnik/ulogovan')
			.then(response => {
				this.korisnik=response.data;
				
				if(this.korisnik)
					this.ulogovan=true;
				else
					this.ulogovan=false;
					
				return axios
					.get('rest/menadzer/dobaviMenadzera/' + this.korisnik.id)
				
			})
			.then(response =>
			{
				this.menadzer = response.data
				
				return axios.get('rest/porudzbina/dobaviPorudzbinePoObjektima/' + this.menadzer.rentacarObjekat)
			})
			.then(response =>{
				this.porudzbine = response.data
			})
	},
	beforeDestroy() {
	    document.removeEventListener('keydown', this.handleKeyDown);
	  },
});