<template>
	<div>
		<v-card class="mx-auto">
			<v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

			<v-card-title>
				Top western road trips
			</v-card-title>

			<v-card-subtitle>
				1,000 miles of wonder
			</v-card-subtitle>

			<v-card-actions>
				<v-btn color="orange lighten-2" text>
					Explore
				</v-btn>

				<v-spacer></v-spacer>

				<v-btn icon @click="show = !show">
					<v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
				</v-btn>
			</v-card-actions>

			<v-expand-transition>
				<div v-show="show">
					<v-divider></v-divider>

					<v-card-text>
						I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for
						sleeping,
						soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and
						two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
					</v-card-text>
				</div>
			</v-expand-transition>
		</v-card>
		<v-card class="mx-auto" max-width="400" style="float: left;">

			<v-card-subtitle class="pb-0">
				Number 10
			</v-card-subtitle>

			<v-card-text class="text--primary">
				<div>Whitehaven Beach</div>

				<div>Whitsunday Island, Whitsunday Islands</div>
			</v-card-text>

		</v-card>
		<v-card class="mx-auto" max-width="400" style="float: left;">

			<v-text-field v-model="user.userName" label="Name" required></v-text-field>
			<v-text-field v-model="user.uuid" label="Name" required></v-text-field>


		</v-card>
	</div>
</template>

<script>
	import Cookies from 'js-cookie'
	export default {
		data: () => ({
			show: false,
			user: {},
		}),
		created() {
			this.getuserprofile();
		},
		methods: {
			getuserprofile: function() {
				const _this = this;
				_this.$axios.get('/api/system/user/profile', {
						headers: {
							'Authorization': `Bearer ` + Cookies.get('Admin-Token')
						}
					})
					.then(function(resp) {
						_this.user = resp.data.data;
						console.log(_this.user)
					})
			},
		}
	}
</script>

<style>
</style>
