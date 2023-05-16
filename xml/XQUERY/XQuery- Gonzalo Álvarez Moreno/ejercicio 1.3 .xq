
<authors>{
  for $author in distinct-values(doc("ejercicio1.xml")/bib/book/author)
  let $count := count(doc("ejercicio1.xml")/bib/book[author=$author])
  return <author>
           <name>{ $author }</name>
           <count>{ $count }</count>
         </author>
}
</authors>
