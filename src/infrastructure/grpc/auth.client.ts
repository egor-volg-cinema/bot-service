import { CONFIG } from '@config'
import { PROTO_PATH } from '@egorcolgcinema/contracts'
import {
	AUTH_SERVICE_NAME,
	AUTH_V1_PACKAGE_NAME,
	AuthServiceClient
} from '@egorcolgcinema/contracts/gen/auth'
import { credentials, loadPackageDefinition } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'

const packageDef = loadSync(PROTO_PATH.AUTH, {
	keepCase: false,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true
})

const proto = loadPackageDefinition(packageDef) as unknown as {
	[AUTH_V1_PACKAGE_NAME]: {
		[AUTH_SERVICE_NAME]: new (...args: any[]) => AuthServiceClient
	}
}

export const authClient = new proto[AUTH_V1_PACKAGE_NAME][AUTH_SERVICE_NAME](
	CONFIG.AUTH_GRPC_URL,
	credentials.createInsecure()
)
