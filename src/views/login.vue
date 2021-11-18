<template>
	<div class="body">
		<v-card  class="mx-auto my-12 dl" max-width="374">
			<validation-observer ref="observer" v-slot="{ invalid }">
				<form @submit.prevent="submit">
					<validation-provider v-slot="{ errors }" name="用户名" rules="required|max:10">
						<v-text-field v-model="loginForm.username" :counter="10" :error-messages="errors" label="用户名" required></v-text-field>
					</validation-provider>
					<validation-provider v-slot="{ errors }" name="密码" rules="required|max:10">
						<v-text-field v-model="loginForm.password" :counter="10" :error-messages="errors" label="密码" required></v-text-field>
					</validation-provider>
					<validation-provider v-slot="{ errors }" name="验证码" rules="required|max:10">
						<v-text-field v-model="loginForm.code" :error-messages="errors" label="验证码" required></v-text-field>
						<v-img :lazy-src="codeUrl" max-height="50" max-width="150" :src="codeUrl" @click="getcode" style="float: right;"></v-img>
					</validation-provider>
					<v-btn class="mr-4" type="submit" @click="handleLogin" :disabled="invalid" color="primary">
						提交
					</v-btn>
					<v-btn @click="clear">
						清空
					</v-btn>
				</form>
			</validation-observer>
		</v-card>


	</div>
</template>

<script>
	import Cookies from 'js-cookie'
	import {
		required,
		digits,
		max,
	} from 'vee-validate/dist/rules'
	import {
		extend,
		ValidationObserver,
		ValidationProvider,
		setInteractionMode
	} from 'vee-validate'

	setInteractionMode('eager')

	extend('digits', {
		...digits,
		message: '{_field_} 需要{length} 字符. ({_value_})',
	})

	extend('required', {
		...required,
		message: '{_field_} 不能为空',
	})

	extend('max', {
		...max,
		message: '{_field_} 不能超过 {length} 字符',
	})

	export default {
		name: "Login",
		components: {
			ValidationProvider,
			ValidationObserver,
		},
		data() {
			return {
				codeUrl: "",
				loginForm: {
					username: "",
					password: "",
					code: "",
					uuid: ""
				},
			};
		},
		created() {
			this.getcode()
		},
		methods: {
			getcode: function() {
				const _this = this;
				_this.$axios.get('/api/captchaImage')
					.then(function(resp) {
						_this.codeUrl = "data:image/gif;base64," + resp.data.img;
						_this.loginForm.uuid = resp.data.uuid;
					})
			},
			handleLogin: function() {
				const _this = this
				_this.$axios.post('/api/login', _this.loginForm).then(resp => {
					Cookies.set('Admin-Token', resp.data.token);
					this.$router.push('/home')
					console.log(resp.data);
				})
			},
			submit: function() {
				this.$refs.observer.validate()
			},
			clear: function() {
				this.name = ''
				this.password = ''
				this.code = ''
			},
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss">
	.body {
		position: fixed;
		background-position: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		background-image: url("../assets/login-background.jpg");
		background-size: cover;
		padding-top: 200px !important;
	}

	.dl {
		margin-top: 60px !important;
		padding: 20px !important;
	}
</style>
