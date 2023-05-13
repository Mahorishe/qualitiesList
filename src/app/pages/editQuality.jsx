import React, { useEffect, useState } from "react";
import EditForm from "../components/ui/editForm";
import { useParams } from "react-router";
import { httpService } from "../service/httpService";

const EditQualityPage = () => {
    const [quality, setQuality] = useState(null);

    const id = useParams().id;
    const qualityAPI = `http://localhost:4000/api/v1/quality/${id}`;

    const handleSubmit = (data) => {
        httpService
            .put(qualityAPI, data)
            .then((response) => console.log(response));
    };

    useEffect(() => {
        httpService
            .get(qualityAPI)
            .then((response) => setQuality(response.data.content));
    }, []);
    return (
        <>
            <h1>Edit Quality Page</h1>
            {quality !== null ? (
                <EditForm data={quality} onSubmit={handleSubmit} />
            ) : (
                "LOADING..."
            )}
        </>
    );
};

export default EditQualityPage;
