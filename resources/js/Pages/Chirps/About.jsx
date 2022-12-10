import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

export default function About({ auth, name }) {
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="About" />
            <h1>{name}</h1>
        </AuthenticatedLayout>
    );
}
