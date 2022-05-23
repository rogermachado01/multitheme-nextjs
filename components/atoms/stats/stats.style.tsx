import styled from '@emotion/styled'
type stats = {
    statsType: any
    color: any
}
export const Stats = styled.h4<stats>((props: any) => ( {
    ...props.theme.stats,
    color: props.theme.stats[props.statsType]

}))