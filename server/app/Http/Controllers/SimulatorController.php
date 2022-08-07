<?php

namespace App\Http\Controllers;

use App\Models\Simulator;
use App\Http\Requests\StoreSimulatorRequest;
use App\Http\Requests\UpdateSimulatorRequest;

class SimulatorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSimulatorRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSimulatorRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Simulator  $simulator
     * @return \Illuminate\Http\Response
     */
    public function show(Simulator $simulator)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Simulator  $simulator
     * @return \Illuminate\Http\Response
     */
    public function edit(Simulator $simulator)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSimulatorRequest  $request
     * @param  \App\Models\Simulator  $simulator
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSimulatorRequest $request, Simulator $simulator)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Simulator  $simulator
     * @return \Illuminate\Http\Response
     */
    public function destroy(Simulator $simulator)
    {
        //
    }
}
