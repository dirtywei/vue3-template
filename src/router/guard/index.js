import { createGuardPageTitle } from './guard-page-title'
import { createGuardPermission } from './guard-permission'

export function setupRouterGuard(router) {
  createGuardPermission(router)
  createGuardPageTitle(router)
}
