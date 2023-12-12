interface svgProps {
    width: number;
    height: number;
    fill: string;
}
const HashIcon = (props: svgProps) => {
    const { width, height, fill } = props
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill={fill}>
            <path d="M7.1144 21.1665L8.19774 16.8332H4.07275L4.47898 15.2082H8.60399L9.70815 10.7915H5.58316L5.98939 9.16659H10.1144L11.1977 4.83325H12.8018L11.7185 9.16659H16.1977L17.281 4.83325H18.8851L17.8018 9.16659H21.9268L21.5206 10.7915H17.3956L16.2914 15.2082H20.4164L20.0102 16.8332H15.8852L14.8018 21.1665H13.1977L14.281 16.8332H9.80186L8.71852 21.1665H7.1144ZM10.2081 15.2082H14.6873L15.7914 10.7915H11.3123L10.2081 15.2082Z" fill={fill} />
        </svg>

    )
}

export default HashIcon