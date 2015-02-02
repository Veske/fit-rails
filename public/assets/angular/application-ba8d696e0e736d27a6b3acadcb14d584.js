(function () {
	angular.module("Fit.services", ["ngRoute", "ngResource", "growlNotifications", "angularFileUpload"]), this.Fit = angular.module("Fit", ["Fit.services"]), angular.module("Fit").config(["$httpProvider", function (e) {
		var t;
		return t = $('meta[name="csrf-token"]').attr("content"), e.defaults.headers.common["X-CSRF-TOKEN"] = t, e.interceptors.push("InterceptorService")
	}])
}).call(this);