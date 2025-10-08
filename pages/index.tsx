import { getOpenLayout } from '@/app/layouts/get-app-layout'

import { setPageLayout } from '@/shared/lib/next'

import { HomePage } from '@/pages/homepage'

export default setPageLayout(HomePage, getOpenLayout)
