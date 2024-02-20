<template>
	<div class="nav">
		<div class="inner">
			<h1 class="logo"><a href="/"></a></h1>
			<ul th:if="${session.authUser == null}" class="user">
				<li class="user-in"><a href="signup">Join</a></li>
				<li class="user-in"><a href="login">Login</a></li>
			</ul>
			<ul th:if="${session.authUser != null}" class="user">
				<li class="user-in"><a href="logOut">Logout</a></li>
			</ul>
		</div>
	</div>
</template>
