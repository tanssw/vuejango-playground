<template>
    <div>
        <div class="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
            <Header />
            <div class="app-main">
                <Sidebar />
                <div class="app-main__outer">
                    <router-view />
                </div>
            </div>
        </div>
        <div class="app-drawer-overlay d-none animated fadeIn"></div>
    </div>
</template>
<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'

export default {
    components: {
        Header,
        Sidebar
    }
}
</script>