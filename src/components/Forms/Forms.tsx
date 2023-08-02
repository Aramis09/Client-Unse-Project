<form onSubmit={handleSubmit} className={styles.container}>
<>
{Object.keys(formData).map((fieldName: string) => {
  {
    if (
      fieldName === "title" ||
      fieldName === "summary" ||
      fieldName === "aside" ||
      fieldName === "footer" ||
      fieldName === "image"
    )
      <>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name={fieldName}
          value={formData[fieldName]}
          onChange={handleInputChange}
        />
      </>;
  }
})}
</>
</form>