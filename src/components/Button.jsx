/**
 *
 * @param {"primary" | "secondary" | "danger"} variant
 * @param props
 * @returns {JSX.Element}
 */
export function Button ({variant="primary", ...props}) {
    const newProps = {
        ...props,
        className: `btn btn-${variant}`
    }

    if (props.href) {
        return <a {...newProps} />
    }
    return <button {...newProps} />
}