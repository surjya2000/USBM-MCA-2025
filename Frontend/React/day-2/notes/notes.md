What is React ?
->js library
->single page application
->virtual DOM

Why is react?
->on demand
->job opportunity
->flexible,efficient
->light weight,single page
->component based

How ?
->using framework(vite-easy,fast)
->without using framework(CRA-create react app)

Installation--
npm create vite@latest 


React
*Folder structure
=>vite-react folder
   ->node modules(folder)(all necessary modules here)
   ->public(folder)(public logo)
   ->src(source folder)(components)
=>.gitignore(ignore git hub)(file)
=>index.html(single page/main html)
=>package-lock.json(installed modules version)
=>package.json(installed modules in dependency )
=>readme.md(markdown file->documentation)

-----------------------------------------------------


=>src(source folder)
   ->app.jsx(file/component import)
   ->index.jsx or main .jsx(main file)

------------------------------------------------------
Tailwindcss in react
<h1 classname='text-3xl' >--<h1>

What is JSX?

javascript+XML

const element=<h1>Element</h1>;-----XML
--------------------------------------- JSX


<h2>(content)</h2>
 |  -------- |
open       closing
tag          tag

jsx---->js code

{js}

-----------------------------------------------------
Component
->reusable
->indepedent part of react in ui
  component 2 types
        ->functional based
        ->class based

----------------------------------------------------------
Prop
-> it is a shortform of proporties
  ex-:let student{
    name:"xyz"
    age:20,
  }
->

How to access props

NB-:components
           ->capitalize (eg-Components)(only 1st letter capital)

ex-:alike <HTML> element
            <Component>

        <Component name={USBM}age={25}/>    
                     |    |
                    key   value
                    ------------>proporties
           

  Access
       {name,age}-->props
        --------
            |
            key

 //to do:Create a profile component in react(name,age,role)

 step-1:src->  create component foldder -> create Card.jsx
                                        -> RAFCE(ract,arrow,function,component,exponent)






