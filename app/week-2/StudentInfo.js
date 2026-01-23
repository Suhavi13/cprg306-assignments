import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Name: Suhavi Kaur</p>

      <p>
        GitHub Repository:{" "}
        <Link href="https://github.com/Suhavi13/cprg306-assignments.git">
          https://github.com/Suhavi13/cprg306-assignments.git
        </Link>
      </p>
    </div>
  );
}