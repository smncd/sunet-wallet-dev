"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
	url: "http://localhost:8004",
	port: "8004",
	appSecret: "öoisuhdhayuhgwyugus",
	db: {
		host: "demo-verifier-db",
		port: "3306",
		username: "verifier",
		password: "verifier",
		dbname: "verifier"
	},
	display: [],
	issuanceFlow: {
		skipConsent: false,
		defaultCredentialConfigurationIds: [],
	},
	appType: 'VERIFIER',
	wwwalletURL: "http://localhost:3000/cb",
	trustedRootCertificates: [
		`-----BEGIN CERTIFICATE-----
MIICMzCCAdqgAwIBAgIUdgESbTG9nxSXVImFdFHHAHGJ9RwwCgYIKoZIzj0EAwIw
IDERMA8GA1UEAwwId3dXYWxsZXQxCzAJBgNVBAYTAkdSMB4XDTI1MDMwNjE1Mzcz
M1oXDTM1MDMwNDE1MzczM1owIDERMA8GA1UEAwwId3dXYWxsZXQxCzAJBgNVBAYT
AkdSMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE0Fm2MNVdwcARMDwXVaNJwcy1
G182BhnFhv7pDmqs4EFGlPvkG9oA02gBKeddJd7wcngcIH1cbpS64iG4r9d5R6OB
8TCB7jASBgNVHRMBAf8ECDAGAQH/AgEAMA4GA1UdDwEB/wQEAwIBBjAdBgNVHQ4E
FgQUfHj4bzyvo4unHysGt+pNa0XsBaIwHwYDVR0jBBgwFoAUfHj4bzyvo4unHysG
t+pNa0XsBaIwOgYDVR0fBDMwMTAvoC2gK4YpaHR0cDovL3VzZXJzLnVvYS5nci9+
cHN0YW1hdG9wL2NhLWNybC5wZW0wIAYDVR0RBBkwF4YVaHR0cDovL3d3dy53YWxs
ZXQub3JnMCoGA1UdEgQjMCGGFWh0dHA6Ly93d3cud2FsbGV0LmNvbYIId3dXYWxs
ZXQwCgYIKoZIzj0EAwIDRwAwRAIgGMfgLwOXvEk0sD3nEtCuwkZRzX9vyYZ/hfg6
VPrJszACIHBsYf7toXfUFjr6y1nAJ/oXP9l/fWBDydcQIq+Vnfem
-----END CERTIFICATE-----`
	],
	sessionIdCookieConfiguration: {
		maxAge: 900000,
		secure: false
	}
};