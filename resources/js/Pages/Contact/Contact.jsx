import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Contact({ auth }) {
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Contact us" />
            <h1>Contact us</h1>
        </AuthenticatedLayout>
    );
}
