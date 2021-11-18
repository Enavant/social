<template>
	<v-card class="main">
		<v-card>
			<v-toolbar flat color="primary" dark>
				<v-toolbar-title>"臭味相投"交友平台</v-toolbar-title>
			</v-toolbar>
		</v-card>
		<v-card class="slidebar justify-start">
			<v-card class="mx-auto" style="height: 100%;width: 15%;float: left;" tile>
					<v-system-bar></v-system-bar>
					<v-list>
						<v-list-item>
							<v-list-item-avatar>
								<v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
							</v-list-item-avatar>
						</v-list-item>
			
						<v-list-item link>
							<v-list-item-content>
								<v-list-item-title class="text-h6">
									John Leider
								</v-list-item-title>
								<v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
					</v-list>
					<v-divider></v-divider>
					<v-list nav dense>
						<v-list-item-group v-model="selectedItem" color="primary">
							<v-list-item v-for="(item, i) in items" :key="i" :to='item.router'>
								<v-list-item-icon>
									<v-icon v-text="item.icon"></v-icon>
								</v-list-item-icon>
			
								<v-list-item-content>
									<v-list-item-title v-text="item.text"></v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</v-list-item-group>
					</v-list>
			</v-card>
            <div class="mx-auto"  style="width: 85%;float: left;">
				<router-view></router-view>
			</div>
		</v-card>
	


	</v-card>
</template>


<script>
	export default {
		data: () => ({
			selectedItem: 0,
			items: [{
					text: '个人信息',
					router: 'profile',
					icon: 'mdi-folder'
				},
				{
					text: '好友管理',
					icon: 'mdi-account-multiple'
				},
				{
					text: '发现新的好友',
					icon: 'mdi-star'
				},
				{
					text: '我的留言板',
					icon: 'mdi-history'
				},

			],
		}),
	}
</script>
<style>
	.main {
		width: 100%;
		height: 100%;
	}

	.slidebar {
		height: 100%;
	}
</style>
