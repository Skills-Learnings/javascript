1. When JS Code runs a global execution context is created
2. contexts value is stored and accessed using `this` keyword.
    1. In browser execution context's value is window object
    2. another context is function execution context

## How code is executed
1. code is executed in two phases
    1. **First is  memory creation phase** 
        
        In this memory is allocated for variables and functions declared.

    2. **Second is execution phase**

        df

## Steps of code execution
1. Global execution

    Its value is assigned to this.
2. Memory Phase - This cycle will happen for sure.
   1. Variables are assigned undefined value
   2. Functions will get their definitions.
3. Execution Phase - 
    1. Variables are assigned their values.
    2. Function executions will create their separate execution context.
        1. Separate New variable envrionment and execution thread will get created.
        2. Then for this again memory phase and exeuction phase will be executed separately for each function execution.
        3. Whatever value is return by function it is returned in global execution context
        4. After execution this separate execution context gets deleted
    
## Call stack



