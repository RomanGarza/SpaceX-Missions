<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <router-link class="btn btn-ghost normal-case text-xl" to="/">SpaceX</router-link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li><router-link to="/about"><a>About</a></router-link></li>
        <li><router-link to="/missions"><a>Missions</a></router-link></li>
      </ul>
    </div>
  </div>
</template>
