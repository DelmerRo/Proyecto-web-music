<template>

  <section class="src-components-nav-bar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                  <router-link to="/home">
                    <a class="nav-link" href="#">Home</a>
                  </router-link>
                </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Dropdown
              </a>


              
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>



            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </section>

</template>

<script lang="js">

export default {
  name: 'src-components-nav-bar',
  props: [],
  mounted() {
    this.getThemes(),
    this.getInstruments()

  },
  data() {
    return {
      url: 'https://63458d1c39ca915a690241be.mockapi.io/Themes',
      themes:[],
      url2: 'https://63458d1c39ca915a690241be.mockapi.io/Instruments',
      instruments:[]
    }
  },
  methods: {
      async getThemes(){
        try {
          let {data:themes} = await this.axios(this.url)
          console.log('Axios Get =>', themes )
          this.themes = themes
        } catch (error) {
          console.error('No se pudo xd', error.message)
        }
      },
      async getInstruments(){
        try {
          let {data:instruments} =await this.axios(this.url2)
          console.log('Axios Get =>',instruments)
          this.instruments = instruments
        } catch (error) {
          console.error('No se pudiste con el anterior podras con este xd', error.message)
        }
      }
  },
  computed: {

  }
}


</script>

<style scoped lang="css">
</style>
