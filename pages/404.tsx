import { getOpenLayout } from '@/app/layouts/get-app-layout'

import { setPageLayout } from '@/shared/lib/next'

import { NotFoundPage } from '@/pages/404.page'

export default setPageLayout(NotFoundPage, getOpenLayout)
