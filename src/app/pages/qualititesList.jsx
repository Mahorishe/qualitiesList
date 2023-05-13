import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import QualitiesTable from "../components/ui/qualitiesTable";
import { httpService } from "../service/httpService";

const QualitiesListPage = () => {
    const history = useHistory();
    const [qualities, setQualities] = useState([]);

    useEffect(() => {
        httpService
            .get("http://localhost:4000/api/v1/quality")
            .then((response) => setQualities(response.data.content));
    }, []);
    const handleEdit = (param) => {
        console.log(param);
        history.push(`/edit/${param}`);
    };
    const handleDelete = (param) => {
        console.log(param);
    };
    return (
        <>
            <h1>Qualitites List Page</h1>
            <QualitiesTable
                onDelete={handleDelete}
                onEdit={handleEdit}
                data={qualities}
            />
        </>
    );
};

export default QualitiesListPage;
