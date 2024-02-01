export default function CoreConcept({image, title, description}) { // 가져올 data.js의 객체 변수명과 일치하도록
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}