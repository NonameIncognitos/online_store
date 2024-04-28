import { observer } from "mobx-react";
import React, { useContext } from "react";
import { Context } from "../index";
import { Card, Row } from "react-bootstrap";

const BrandBar = observer(() => {
    const { device } = useContext(Context);
    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <div key={brand.id} style={{marginBottom: "10px",  width: "auto" }}>
                    <Card
                        style={{ cursor: 'pointer' }}
                        key={brand.id}
                        className="p-3"
                        onClick={() => device.setSelectedBrand(brand)}
                        border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    >

                            {brand.name}
                    </Card>
                </div>
            )}
        </Row>
    );
});

export default BrandBar;
