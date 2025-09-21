import { NavigationProp, useNavigation } from '@react-navigation/native'

import { TypeRootStackParamList } from '@/navigation/navigation.typer'

export const useTypedNavigation = () =>
	useNavigation<NavigationProp<TypeRootStackParamList>>()
