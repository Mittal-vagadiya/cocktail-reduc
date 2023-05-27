import React from "react";
import { useSelector } from "react-redux";

import "./Gerns.css";

const Genres = ({ data }) => {
    const { gerns } = useSelector((state) => state.home);

    return (
        <div className="genres">
            {data?.map((g) => {
                if (!gerns[g]?.name) return;
                return (
                    <div key={g} className="genre">
                        {gerns[g]?.name}
                    </div>
                );
            })}
        </div>
    );
};

export default Genres;