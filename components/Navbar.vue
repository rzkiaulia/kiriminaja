<style lang="scss" scoped>

</style>

  <template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <n-link class="navbar-item" to="/">
          <img class="image" src="~assets/images/kiriminajalogo.png" />
        </n-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <n-link class="navbar-item" to="/">
            <div class="is-size-6 has-text-primary has-text-weight-bold">Beranda</div>
          </n-link>
           <n-link class="navbar-item" to="/about">
            <div class="is-size-6 has-text-black has-text-weight-bold">Tentang Kami</div>
          </n-link>
          </div>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <n-link class="navbar-item" to="/signin">
            <div class="is-size-6 has-text-black">Masuk</div>
          </n-link>
          </div>
          <div class="navbar-item">
            <n-link class="button is-primary is-rounded" to="/signup">
              <div class="has-text-brown is-size-6">Daftar</div>
            </n-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>
