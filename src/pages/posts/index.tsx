import { FaustPage, getNextServerSideProps } from '@faustwp/core'
import { gql } from '@/__generated__'
import {
	NcgeneralSettingsFieldsFragmentFragment,
	OrderEnum,
	PostObjectsConnectionOrderbyEnum,
	PostsFilterPageQueryGetPostsQuery,
} from '@/__generated__/graphql'
import { FILTERS_OPTIONS } from '@/contains/contants'
import React from 'react'
import { useRouter } from 'next/router'
import { FOOTER_LOCATION, PRIMARY_LOCATION } from '@/contains/menu'
import PageLayout from '@/container/PageLayout'
import { PostDataFragmentType } from '@/data/types'
import GridPostsArchive from '@/components/GridPostsArchive'
import useGetPostsNcmazMetaByIds from '@/hooks/useGetPostsNcmazMetaByIds'
import { TPostCard } from '@/components/Card2/Card2'
import { GetServerSidePropsContext } from 'next'
import TabFilters from '@/components/TabFilters'
import getTrans from '@/utils/getTrans'
import { FireIcon } from '@/components/Icons/Icons'
import ArchiveFilterListBox from '@/components/ArchiveFilterListBox/ArchiveFilterListBox'
