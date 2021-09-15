import React from 'react';
import Tag from './Tag';

export default function TaggsContainer(props) {
    const tags = props.tags;

    return (
        <div className="taggs_container">
            {tags.map((tag) =>
                <Tag key={tag.id.toString()} name={tag.name} />
            )}
        </div>
    )
}
