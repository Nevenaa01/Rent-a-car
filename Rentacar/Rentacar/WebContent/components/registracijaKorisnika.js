Vue.component("registracijakorisnika", {
	data: function () {
		    return {
		      korisnik: {korisnickoIme: null, lozinka: null, ime: null, prezime: null, pol: null, datumRodjenja: null, uloga: "Kupac"}, 
		      potvrdaLozinke: null,
		      kreator:{korisnickoIme:"",uloga:"",ime:"",prezime:"",pol:"",datumRodjenja:"",lozinka:"",id:""},
		      validnoKorisnickoIme: true,
		      validnaLozinka: true,
		      validnapotvrdaLozinke: true,
		      validnoIme: true,
		      validnoPrezime: true,
		      validanPol: true,
		      validanDatumRodjenja: true,
		      ulogovan:null
		    }
	},
	template: ` 
 	<div>
 		<div class="pozadina1">	
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
                                                <label>Korisničko ime</label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="bi bi-person-fill"></i></div>
                                                    <input type="text" v-model="korisnik.korisnickoIme" v-bind:class="{red: !validnoKorisnickoIme}" placeholder="Unesite korisničko ime" class="form-control">
                                                </div>
                                                <div><label v-if="!validnoKorisnickoIme" class="invalidInputs">*Korisničko ime</label></div>
                                            </div>

                                            <div class="col-12">
                                                <label>Lozinka</label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                    <input type="password" v-model="korisnik.lozinka" v-bind:class="{red: !validnaLozinka}" placeholder="Unesite lozinku" class="form-control">	
                                                </div>
                                                <div><label v-if="!validnaLozinka" class="invalidInputs">*Nevalidna lozinka</label></div>
                                            </div>
                                            
                                            <div class="col-12">
                                                <label>Potvrda lozinke</label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                    <input type="password" v-model="potvrdaLozinke" v-bind:class="{red: !validnapotvrdaLozinke}" placeholder="Potvrdite lozinku" class="form-control">                                                
                                                </div>
                                                <div><label v-if="!validnapotvrdaLozinke" class="invalidInputs">*Lozinke se ne poklapaju</label></div>
                                            </div>
                                            
                                            <div class="col-12">
                                                <label>Ime</label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                    <input type="text" v-model="korisnik.ime" v-bind:class="{red: !validnoIme}" placeholder="Unesite ime" class="form-control">                                     
                                                </div>
                                                <div><label v-if="!validnoIme" class="invalidInputs">*Nevalidno ime</label></div>
                                            </div>
                                            
                                            <div class="col-12">
                                                <label>Prezime</label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                    <input type="text" v-model="korisnik.prezime" v-bind:class="{red: !validnoPrezime}" placeholder="Unesite prezime" class="form-control">
                                                </div>
                                                <div><label v-if="!validnoPrezime" class="invalidInputs">*Nevalidno prezime</label></div>
                                            </div>
                                            
                                            <div class="col-12">
                                                <label>Pol</label>
                                                <div class="input-group">
                                                    <select v-model="korisnik.pol" v-bind:class="{red: !validanPol}" placeholder="Pol" class="form-control">
														<option value="Muski">Muski</option>
														<option value="Zenski">Zenski</option>
													</select>
                                                </div>
                                                <div><label v-if="!validanPol" class="invalidInputs">*Izaberite pol</label></div>
                                            </div>
                                            
                                            <div class="col-12">
                                                <label>Datum rođenja</label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                    <input type="Date" v-model="korisnik.datumRodjenja" v-bind:class="{red: !validanDatumRodjenja}" class="form-control">
                                                </div>
                                                <div><label v-if="!validanDatumRodjenja" class="invalidInputs">*Nevalidan datum</label></div>
                                            </div> 
                                            
                                            <div class="col-sm-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="inlineFormCheck">
                                                    <label class="form-check-label" for="inlineFormCheck">Kliknite bez razloga</label>
                                                </div>
                                            </div>

                                            <div class="col-sm-6"  v-if="!this.ulogovan">
                                                <a v-bind:href="'/WebShopREST/#/loggovanje'" class="float-end text-primary">Imate nalog?</a>
                                            </div>

                                            <div class="col-12">
                                                <button type="submit" v-on:click="registrujSe" class="btn btn-primary px-4 float-end mt-4">Registruj se</button>
                                            </div>
                                    </form>
                                </div>
                            </div>
                            <div  class="col-md-5 ps-0 d-none d-md-block">
                                <div class="form-right text-white text-center pt-5 divForma">
                                    <i class="bi bi-bootstrap"></i>
                                    <h2  v-if="!this.ulogovan" class="fs-1">Registrujte se!</h2>
                                    <h2 v-if="this.ulogovan" class="fs-1">Registrujte menadzera!</h2>
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
		registrujSe : function(){
			event.preventDefault()
			
			this.validnoKorisnickoIme = !(this.korisnik.korisnickoIme === null || this.korisnik.korisnickoIme === "")
			this.validnaLozinka = !(this.korisnik.lozinka === null || this.korisnik.lozinka === "")
			this.validnapotvrdaLozinke = this.potvrdaLozinke === this.korisnik.lozinka && !(this.potvrdaLozinke === null || this.potvrdaLozinke === "")
			this.validnoIme = !(this.korisnik.ime === null || this.korisnik.ime === "")
			this.validnoPrezime = !(this.korisnik.prezime === null || this.korisnik.prezime === "")
			this.validanPol = !(this.korisnik.pol === null || this.korisnik.pol === "")
			this.validanDatumRodjenja = !(this.korisnik.datumRodjenja === null || this.korisnik.datumRodjenja === "")
			
			datum = new Date(this.korisnik.datumRodjenja);
			var danasnjiDatum = new Date()
			
			if(this.validanDatumRodjenja)
				this.validanDatumRodjenja = !(datum.getTime() > danasnjiDatum.getTime() || (datum.toLocaleDateString("en-IN") === danasnjiDatum.toLocaleDateString("en-IN")))
			
			
			
			if(this.validnoKorisnickoIme && this.validnaLozinka && this.validnapotvrdaLozinke && this.validnoIme 
				&& this.validnoPrezime && this.validanPol && this.validanDatumRodjenja){
				if(this.ulogovan)
				{
					this.korisnik.uloga="Menadzer";
					axios
					.post('rest/korisnik/registruj', this.korisnik)
					.then(response => {
						
						const validan = response.data;
						if(validan){
							alert("Uspesno ste registrovani")
							axios.post("rest/menadzer/registruj",this.korisnik)
							router.push(`/kreiranjeobjekta/${this.korisnik.korisnickoIme}`)
						}
						else{
							alert("Korisnik s tim korisnickim imenom postoji")
						}
					})
				}
				else
				{
				axios
					.post('rest/korisnik/registruj', this.korisnik)
					.then(response => {
						
						const validan = response.data;
						if(validan){
							alert("Uspesno ste registrovani")
							
							router.push(`/`)
						}
						else{
							alert("Korisnik s tim korisnickim imenom postoji")
						}
					})
			}}
		}
	},
	mounted(){
		axios.post('rest/korisnik/ulogovan')
		.then(response=>{
			this.kreator=response.data;
                if(this.kreator)
                    this.ulogovan=true;
                else
                    this.ulogovan=false;
		})
	}
});